import { useEffect, useRef } from 'react'
import type * as THREE from 'three'

interface Shape {
  mesh: THREE.Mesh
  speed: number
  axis: THREE.Vector3
}

/**
 * Каратистская 3D-сцена для Hero: татами-сетка, парящие иероглифы
 * 空手道 (каратэ-до) и красный энсо - все элементы рисуются на
 * canvas-текстурах, без внешних ассетов и пост-процессинга.
 * Three.js подгружается динамически - отдельным чанком.
 */
export function Hero3D() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    let cancelled = false
    let cleanup: (() => void) | null = null

    void import('three').then((THREE) => {
      if (cancelled) return
      cleanup = initScene(THREE, mount)
    })

    return () => {
      cancelled = true
      cleanup?.()
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />
}

/** Рисует иероглиф на canvas и возвращает прозрачную плоскость-текстуру. */
function makeKanjiPlane(
  THREE: typeof import('three'),
  text: string,
  color: string,
  size: number,
): THREE.Mesh {
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 256
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('Canvas 2D недоступен')
  ctx.clearRect(0, 0, 256, 256)
  ctx.font = 'bold 175px "Yu Gothic", "Hiragino Sans", "Noto Sans JP", sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = color
  ctx.fillText(text, 128, 136)
  const texture = new THREE.CanvasTexture(canvas)
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    depthWrite: false,
    opacity: 0.85,
  })
  return new THREE.Mesh(new THREE.PlaneGeometry(size, size), material)
}

/** Рисует красный энсо (кистевой дзэн-круг) на canvas. */
function makeEnso(THREE: typeof import('three'), size: number): THREE.Mesh {
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 256
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('Canvas 2D недоступен')
  ctx.clearRect(0, 0, 256, 256)
  ctx.strokeStyle = 'rgba(227, 30, 46, 0.85)'
  ctx.lineWidth = 16
  ctx.lineCap = 'round'
  ctx.beginPath()
  // Незамкнутый круг с «кистевым» зазором
  ctx.arc(128, 128, 84, 0.35, Math.PI * 2 - 0.45)
  ctx.stroke()
  ctx.beginPath()
  ctx.arc(210, 62, 9, 0, Math.PI * 2)
  ctx.fillStyle = 'rgba(227, 30, 46, 0.5)'
  ctx.fill()
  const texture = new THREE.CanvasTexture(canvas)
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    depthWrite: false,
    opacity: 0.22,
  })
  return new THREE.Mesh(new THREE.PlaneGeometry(size, size), material)
}

function initScene(THREE: typeof import('three'), mount: HTMLDivElement): () => void {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2(0x0a0f1f, 0.12)

  const camera = new THREE.PerspectiveCamera(55, mount.clientWidth / Math.max(mount.clientHeight, 1), 0.1, 100)
  camera.position.set(0, 0.6, 7)

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(mount.clientWidth, mount.clientHeight)
  mount.appendChild(renderer.domElement)

  // Пол-сетка (татами)
  const grid = new THREE.GridHelper(34, 44, 0x2b3b6b, 0x182447)
  grid.position.y = -1.7
  scene.add(grid)

  const shapes: Shape[] = []

  // Энсо (красный дзэн-круг) - самый дальний слой
  const enso = makeEnso(THREE, 5.2)
  enso.position.set(1.1, 1.0, -3.6)
  scene.add(enso)
  shapes.push({ mesh: enso, speed: 0.1, axis: new THREE.Vector3(0, 1, 0.04).normalize() })

  // Иероглифы 空手道 (каратэ-до)
  const kanji = makeKanjiPlane(THREE, '空', '#ffffff', 2.5)
  kanji.position.set(-3.4, 1.0, -1.2)
  scene.add(kanji)
  shapes.push({ mesh: kanji, speed: 0.28, axis: new THREE.Vector3(0, 1, 0.1).normalize() })

  const kanjiTe = makeKanjiPlane(THREE, '手', '#ffffff', 1.9)
  kanjiTe.position.set(-1.6, 2.0, -2.0)
  scene.add(kanjiTe)
  shapes.push({ mesh: kanjiTe, speed: 0.34, axis: new THREE.Vector3(0, 1, 0.06).normalize() })

  const kanjiDo = makeKanjiPlane(THREE, '道', '#e31e2e', 2.2)
  kanjiDo.position.set(2.7, 1.5, -1.6)
  scene.add(kanjiDo)
  shapes.push({ mesh: kanjiDo, speed: 0.3, axis: new THREE.Vector3(0, 1, 0.08).normalize() })

  const pointer = { x: 0, y: 0 }
  const onPointer = (e: PointerEvent) => {
    pointer.x = (e.clientX / window.innerWidth) * 2 - 1
    pointer.y = (e.clientY / window.innerHeight) * 2 - 1
  }
  window.addEventListener('pointermove', onPointer, { passive: true })

  let visible = true
  const onVisibility = () => {
    visible = !document.hidden
  }
  document.addEventListener('visibilitychange', onVisibility)

  const clock = new THREE.Clock()
  let raf = 0

  const animate = () => {
    raf = requestAnimationFrame(animate)
    if (!visible) return
    const dt = clock.getDelta()

    shapes.forEach((s, i) => {
      s.mesh.rotateOnWorldAxis(s.axis, s.speed * dt)
      s.mesh.position.y += Math.sin(clock.elapsedTime * 0.55 + i * 2.1) * 0.0012
    })

    camera.position.x += (pointer.x * 0.6 - camera.position.x) * 0.04
    camera.position.y += (pointer.y * 0.35 + 0.6 - camera.position.y) * 0.04
    camera.lookAt(0, 0.6, 0)

    renderer.render(scene, camera)
  }

  const renderOnce = () => renderer.render(scene, camera)

  const onResize = () => {
    const w = mount.clientWidth
    const h = Math.max(mount.clientHeight, 1)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
  }
  window.addEventListener('resize', onResize)

  if (reduced) {
    renderOnce()
  } else {
    animate()
  }

  return () => {
    cancelAnimationFrame(raf)
    window.removeEventListener('pointermove', onPointer)
    window.removeEventListener('resize', onResize)
    document.removeEventListener('visibilitychange', onVisibility)
    shapes.forEach((s) => {
      s.mesh.geometry.dispose()
      const material = s.mesh.material as THREE.MeshBasicMaterial
      material.map?.dispose()
      material.dispose()
    })
    grid.geometry.dispose()
    ;(grid.material as THREE.Material).dispose()
    renderer.dispose()
    if (renderer.domElement.parentElement === mount) {
      mount.removeChild(renderer.domElement)
    }
  }
}

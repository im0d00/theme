import { useRef, useEffect } from 'react'
import * as THREE from 'three'

export default function ThreeHero() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // Scene
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    // Torus knot geometry
    const geometry = new THREE.TorusKnotGeometry(3, 0.8, 128, 32)
    const material = new THREE.MeshPhongMaterial({
      color: 0x00f5ff,
      emissive: 0xa855f7,
      emissiveIntensity: 0.3,
      wireframe: true,
    })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Particle field
    const particleGeo = new THREE.BufferGeometry()
    const particleCount = 500
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 50
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particleMat = new THREE.PointsMaterial({ color: 0x00f5ff, size: 0.05 })
    const particles = new THREE.Points(particleGeo, particleMat)
    scene.add(particles)

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
    scene.add(ambientLight)
    const pointLight = new THREE.PointLight(0x00f5ff, 2, 100)
    pointLight.position.set(10, 10, 10)
    scene.add(pointLight)
    const pointLight2 = new THREE.PointLight(0xa855f7, 1, 100)
    pointLight2.position.set(-10, -10, -10)
    scene.add(pointLight2)

    camera.position.z = 8

    // Resize observer
    const ro = new ResizeObserver(() => {
      if (!mount) return
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    })
    ro.observe(mount)

    let animId: number
    const animate = () => {
      animId = requestAnimationFrame(animate)
      mesh.rotation.x += 0.003
      mesh.rotation.y += 0.005
      particles.rotation.y += 0.0005
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
      renderer.dispose()
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} className="w-full h-full" />
}

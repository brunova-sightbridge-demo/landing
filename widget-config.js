// Keep the API on the same origin in production so sign-in works across the demo.
window.SIGHTBRIDGE_API_BASE = /^(localhost|127\.0\.0\.1)$/.test(window.location.hostname)
  ? "http://localhost:8001"
  : `${window.location.origin}/api`;

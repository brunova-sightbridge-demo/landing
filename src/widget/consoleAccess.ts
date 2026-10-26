export function canOpenAdminConsole(role: unknown): boolean {
  return role === "viewer" || role === "curator" || role === "admin";
}

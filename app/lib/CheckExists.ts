export default async function CheckExists(username: string) {
  const result = await fetch("http://127.0.0.1:8000/user");
  if (result) return false;
  return true;
}

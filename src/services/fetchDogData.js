export async function dogData() {
  const res = await fetch("https://apimocha.com/dogsapi/dogs");
  if (res.ok) {
    return res.json();
  } else {
    throw await res.json();
  }
}

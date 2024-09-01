import { redirect } from "@sveltejs/kit";

export function load() {
  redirect(
    302,
    "https://raw.githubusercontent.com/oxidic/oxate/main/install.sh"
  );
}

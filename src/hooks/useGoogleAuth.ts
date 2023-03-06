import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useCustomDispatch } from "@store";
import { addToast } from "modsen-toasts-lib";

import { setCalendar } from "@store/slices/calendar";
import { GOOGLE_SCOPE, toastSignOutData } from "@constants";

export function useGoogleAuth() {
  const supabase = useSupabaseClient();
  const dispatch = useCustomDispatch();

  const signIn = (): void => {
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        scopes: GOOGLE_SCOPE,
      },
    });
  };

  const signOut = (): void => {
    supabase.auth.signOut();
    dispatch(setCalendar([]));

    addToast(toastSignOutData)();
    sessionStorage.removeItem("user");
  };

  return [signIn, signOut];
}

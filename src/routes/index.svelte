<script lang="ts">
  import { user } from "$stores/sessionStore";
  import { supabase } from "$lib/supabaseClient";
  import Auth from "$components/Auth.svelte";
  import Profile from "$components/Profile.svelte";

  user.set(supabase.auth.user());

  supabase.auth.onAuthStateChange((_, session) => {
    user.set(session.user);
  });
</script>

<div class="container" style="padding: 50px 0 100px 0;">
  {#if $user}
    <Profile />
  {:else}
    <Auth />
  {/if}
</div>

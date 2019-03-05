<template>
  <div>Sign Out</div>
</template>

<script>
export default {
  created() {
    //Remove token from local storage
    localStorage.removeItem('auth')
    // Show success message for response in toast
    this.$toasted.success("Signed out successfully. Thank you for using this app!.")
    // Redirect to sign in page
    this.$router.push({ name: 'login' })
  }
}
</script>


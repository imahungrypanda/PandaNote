// signup: should make an AJAX request that creates a new user.
export const signup = (user) => (
  $.ajax({
    method: "POST",
    url: "api/users",
    data: user
  })
)

// login: should make an AJAX request that creates a new session.
export const login = (user) => (
  $.ajax({
    method: "POST",
    url: "api/session",
    // TODO: Check if this is the right way to be passing in a user or if user should be nested when it gets here.
    data: user
  })
)

// logout: should make an AJAX request that deletes the current session.
export const logout = () => (
  $.ajax({
    method: "DELETE",
    url: `api/session`
  })
)

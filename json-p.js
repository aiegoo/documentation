function myCallback( payload ) {
  if (200 == payload.status) {
    document.getElementById("success").innerHTML =
      payload.data.current_user_url;
  } else {
    document.getElementById("error").innerHTML =
      "An error occurred";
  }
}

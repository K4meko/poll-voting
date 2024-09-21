// react-query.js
import {QueryClient, QueryClientProvider, useMutation} from "react-query";
interface SignUpParams {
  username: string;
  password: string;
  email: string;
}

export const signUp = async ({username, password, email}: SignUpParams) => {
  // Your sign-up logic here, e.g., making an API call
  const response = await fetch(
    `http://localhost:8000/user/signup/${username}/${password}/${email}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username, password, email}),
    }
  );

  if (response.status !== 200) {
    console.log("Error signing up");
  }
  const data = await response.json();

  if (data.token) {
    localStorage.setItem("token", data.token);
  } else {
    console.log("Token not found in response");
  }

  return response.json();
};

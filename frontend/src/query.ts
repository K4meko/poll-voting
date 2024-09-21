// react-query.js
import {QueryClient, QueryClientProvider, useMutation} from "react-query";

// Whip up a fresh QueryClient instance
const queryClient = new QueryClient();

// Export the QueryClient and QueryClientProvider, because why not?
export {queryClient, QueryClientProvider};

export const signUp = async (data: {
  username: string;
  password: string;
  email: string;
}) => {
  const response = await fetch(
    `http://localhost:3001/signup/${data.username}/${data.password}/${data.email}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  return response.json();
};

export const useSignUpMutation = () => {
  const mutation = useMutation(signUp);
  return {
    data: mutation.data,
    error: mutation.error,
    isLoading: mutation.isLoading,
  };
};

import { PageStub } from "@/components/ui/PageStub";

export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <PageStub
        title="Register"
        route="/register"
        description="Student sign-up form: name, email, password, terms agreement."
        bullets={["Name / email / password fields","Social sign-up (Google, Facebook, Apple)","Link to Login"]}
      />
    </div>
  );
}

import image1 from "./image1.jpg";
import Image from "next/image";
import { IconGoogle, IconApple } from "nucleo-social-media";
import { ComponentProps, ReactNode } from "react";

export default function Page() {
  return (
    <div className="grid place-items-center h-svh w-full">
      <LoginUserPage />
    </div>
  );
}

function LoginUserPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full bg-amber-1">
      <div className="flex-1 grid place-items-center w-full h-full p-8">
        <form className="w-full max-w-98">
          <div className="space-y-6">
            <div>
              <div className="size-10 rounded-lg bg-[#DE5F13] flex items-center justify-center">
                <svg
                  fill="none"
                  viewBox="0 0 38 48"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 text-white"
                >
                  <path
                    d="m14.25 5c0 7.8701-6.37994 14.25-14.25 14.25v9.5h14.25v14.25h9.5c0-7.8701 6.3799-14.25 14.25-14.25v-9.5h-14.25v-14.25z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div className="space-y-1">
              <h1 className="text-base font-medium text-gray-12">
                Login to Acme
              </h1>
              <p className="text-sm text-gray-11 max-w-83 text-pretty">
                Welcome to a workspace that&apos;s secure, powerful, and totally
                private
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email address or username"
              />
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <button
                type="submit"
                className="relative h-10 rounded-xl px-2.5 flex items-center justify-center text-sm font-medium text-gray-1 bg-[#DE5F13] cursor-pointer shadow-xs shadow-gray-4"
              >
                <span>Log in</span>
                <div className="pointer-events-none absolute inset-0 rounded-xl inset-ring-2 inset-ring-black/10" />
              </button>
            </div>
            <div className="flex items-center">
              <div
                aria-hidden="true"
                className="w-full border-t border-gray-4"
              />
              <div className="relative flex justify-center">
                <span className=" px-2 text-xs font-medium text-gray-11 text-nowrap">
                  Or authorize with
                </span>
              </div>
              <div
                aria-hidden="true"
                className="w-full border-t border-gray-4"
              />
            </div>
            <div className="flex gap-2">
              <SocialButton>
                <IconGoogle className="[&_path]:opacity-100" />
                <span className="px-1">Google</span>
              </SocialButton>
              <SocialButton>
                <IconApple />
                <span className="px-1">Apple</span>
              </SocialButton>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm font-medium text-gray-12">
                Forgot password?
              </a>
              <div className="text-gray-12 text-sm font-medium">
                <span className="text-gray-11">
                  Don&apos;t have an account?
                </span>{" "}
                <a href="#">Sign Up</a>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="flex-1 p-8 hidden lg:block">
        <div className="rounded-2xl overflow-hidden w-full h-full relative">
          <Image src={image1} fill alt="Image 1" className="object-cover" />
          <div className="pointer-events-none absolute inset-0 rounded-2xl inset-ring-2 inset-ring-black/10 " />
        </div>
      </div>
    </div>
  );
}

type InputProps = ComponentProps<"input">;

function Input(props: InputProps) {
  return (
    <input
      className="bg-white h-10 rounded-xl px-2.5 pl-3.5 shadow-xs shadow-gray-4 ring-1 ring-gray-4 placeholder:text-gray-10 placeholder:text-sm text-sm text-gray-12"
      {...props}
    />
  );
}

type SocialButtonProps = {
  children: ReactNode;
};

function SocialButton({ children }: SocialButtonProps) {
  return (
    <button className="bg-white w-full h-10 rounded-xl px-2.5 flex items-center text-gray-12 justify-center gap-1 cursor-pointer [&_svg]:size-5 [&_svg]:text-gray-11 shadow-xs shadow-gray-4 ring-1 ring-gray-4 text-sm font-medium">
      {children}
    </button>
  );
}

"use client";

import { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";
import { inputClass } from "./formStyles";

const LoginModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [submitted, setSubmitted] = useState(false);

  const close = () => {
    onClose();
    setSubmitted(false);
  };

  return (
    <Modal open={open} onClose={close} title="Login">
      <h2 className="bold-32">Welcome back</h2>
      <p className="regular-14 mt-2 text-gray-30">Log in to see your saved trips and schedules.</p>

      <form
        className="mt-6 flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
      >
        <input className={inputClass} type="email" name="email" placeholder="Email" required autoComplete="email" />
        <input
          className={inputClass}
          type="password"
          name="password"
          placeholder="Password"
          required
          minLength={6}
          autoComplete="current-password"
        />
        <Button type="submit" title="Log in" variant="btn_dark_green" full />
        {submitted && (
          <p className="regular-14 text-green-50">
            This is a UI demo: authentication is not connected yet (NextAuth, Supabase or Clerk can be added later).
          </p>
        )}
      </form>
    </Modal>
  );
};

export default LoginModal;

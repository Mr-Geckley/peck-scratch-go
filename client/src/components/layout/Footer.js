import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white fixed-bottom text-center the-footer">
      Copyright &copy; {new Date().getFullYear()} Peck-Scratch-Go
    </footer>
  );
}

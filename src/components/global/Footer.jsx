import { getFullYear } from "@/utils/date";
import { Github } from "lucide-react";

export default function Footer() {
    const fullYear = getFullYear();

    return (
        <footer className="border-t border-zinc-100">
            <div className="flex items-center justify-center py-5 text-center text-xs text-zinc-100">
                © {fullYear} qwrtsdev. All rights reserved.
                &nbsp;&nbsp;
                <a
                    href="https://github.com/qwrtsdev/ywc20-homework"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Github color="#f4f4f5" size={16} />
                </a>
            </div>
        </footer>
    );
}

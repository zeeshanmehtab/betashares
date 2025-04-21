export function Footer() {
    return (
        <footer className="bg-dark text-light py-6 mt-12">
            <div className="max-w-6xl mx-auto text-center">
            <p className="text-sm">&copy; 2025 Betashares. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                <a href="#" className="text-primary hover:underline">Terms of Service</a>
                <a href="#" className="text-primary hover:underline">Contact Us</a>
            </div>
            </div>
        </footer>
    );
}
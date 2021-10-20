import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
    return (
        <div>
            <div className="bar">
                <Link href="/">Cool Fits</Link>
            </div>
            <div className="sub-bar">
                <Nav/>
            </div>
        </div>
    )
}

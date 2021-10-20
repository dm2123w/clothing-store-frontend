import Link from 'next/link';

export default function Nav() {
    return (
        <div>
            <Link href="account">Account</Link>
            <Link href="orders">Orders</Link>
            <Link href="products">Products</Link>
            <Link href="sell">Sell</Link>
        </div>
    )
}

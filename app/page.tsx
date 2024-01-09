import Link from 'next/link'
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      Hello King. <Link href="/about">About</Link>
      <Image
        src="/images/profile.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </div>
  )
}

import Image from "next/image"

import sponsored from '../../public/assets/images/Sponsored.png'

export default function Partners() {
    return(
        <div style={{padding: '2rem 3rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div>
                <Image src={sponsored} width={1135.64} height={208.32} alt='partners' />
            </div>
        </div>
    )
}
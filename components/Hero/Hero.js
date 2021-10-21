//components
import Button from "../Button/Button";

//styles
import styles from './Hero.module.css'

//assets
import hero from '../../public/assets/images/hero.png'

//utils
import Image from 'next/image'

export default function Hero() {
    return(
        <div className={styles.container}>
            <div style={{maxWidth: '555px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h1 style={{fontSize: '3.125rem', lineHeight: '4.375rem', marginBottom: '1.25rem', color: '#0b132a'}}>We Are Everything We Aspire To BE</h1>
                <p style={{fontSize: '1rem', color: '#4f5665', lineHeight: '1.875rem', marginBottom: '1.25rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac orci condimentum lectus efficitur tempor vel eu massa. Sed molestie turpis eget ipsum malesuada dignissim</p>
                <div>
                    <Button
                        name='Get Started'
                        backgroundColor='#BA55D3'
                        borderRadius='4px'
                        padding='1rem 2rem'
                        color='#ffffff'
                    />
                </div>
            </div>
            <div style={{maxWidth: '762px'}}>
                <Image src={hero} width={762} height={508} alt='hero' />
            </div>
        </div>
    )
}
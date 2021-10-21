import Button from "../Button/Button"

//utils
import Image from 'next/image'

//images
import pricing3 from '../../public/assets/images/pricing3.png'
import pricing2 from '../../public/assets/images/pricing2.png'
import pricing1 from '../../public/assets/images/pricing1.png'

export default function Plan() {
    return(
        <div style={{maxWidth: '1200px', padding: '2rem 3rem', display: 'flex', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'center'}}>
            <h2 style={{textAlign: 'center', fontSize: '2.188rem', color: '#0b132a', fontWeight: '500', lineHeight: '3.125rem', marginBottom: '1.25rem'}}>Choose Your Plan</h2>
            <p style={{margin: '0 auto', maxWidth: '555px', textAlign: 'center', fontSize: '1rem', color: '#4f5665',marginBottom: '3.75rem', fontWeight: '', lineHeight: '1.875rem'}}>
            Curabitur tempor justo non turpis malesuada cursus. Mauris ac libero eu sem finibus lacinia nec pulvinar.
            </p>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '1100px'}}>
                <Card
                    image={pricing3}
                    plan='Free Plan'
                    price='Free'
                    list={[
                        'Mauris sem neque',
                        'Mauris sem neque',
                        'Mauris sem neque',
                        'Mauris sem neque'
                    ]}
                />
                <Card
                    image={pricing2}
                    plan='Standard Plan'
                    price='$9 / mo'
                    list={[
                        'Mauris sem neque',
                        'Mauris sem neque',
                        'Mauris sem neque',
                        'Mauris sem neque',
                        'Mauris sem neque'
                    ]}
                />
                <Card
                    image={pricing1}
                    plan='Premium Plan'
                    price='$12 / mo'
                    list={[
                        'Mauris sem neque',
                        'Mauris sem neque',
                        'Mauris sem neque',
                        'Mauris sem neque',
                        'Mauris sem neque',
                        'Mauris sem neque'
                    ]}
                />
            </div>
            
        </div>
    )
}

const Card = ({image, plan, price, list}) => {
    return(
        <div 
            style={{
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center', 
                backgroundClip: '#ffffff', 
                borderRadius: '10px', 
                width: '330px', 
                border: '2px solid #DDDDDD',
                padding: '1rem',
                margin: '1rem'
            }}
        >
            <div>
                <div style={{marginBottom: '1.409rem'}}>
                    <Image src={image} width={207} height={207} alt='icon' />
                </div>
                <div style={{textAlign: 'center', marginBottom: '1.875rem', fontSize: '1.125rem', color: '#0B132A', fontWeight: 500}}>{plan}</div>
            </div>
            <div style={{marginBottom: '3.125rem', minHeight: '200px'}}>
                {
                    list.map((item, i) => 
                    <div key={i} style={{display: 'flex', alignItems: 'center'}}>
                        <div style={{margin: '.5rem', width: '30px'}}>
                            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.4487 9.27955C5.31743 9.27981 5.1874 9.25416 5.06608 9.20405C4.94475 9.15394 4.83452 9.08036 4.7417 8.98755L0.499696 4.74455C0.404122 4.65237 0.327864 4.54208 0.27537 4.42011C0.222877 4.29814 0.1952 4.16694 0.193953 4.03417C0.192706 3.90139 0.217915 3.76969 0.268109 3.64676C0.318303 3.52383 0.392477 3.41213 0.486302 3.31817C0.580128 3.22421 0.691726 3.14988 0.814585 3.09951C0.937444 3.04915 1.0691 3.02375 1.20188 3.02481C1.33466 3.02587 1.4659 3.05336 1.58794 3.10568C1.70998 3.158 1.82038 3.2341 1.9127 3.32955L5.44769 6.86455L11.8127 0.501546C12.0002 0.313906 12.2546 0.208437 12.5198 0.208344C12.7851 0.20825 13.0396 0.313538 13.2272 0.501046C13.4148 0.688554 13.5203 0.942923 13.5204 1.20819C13.5205 1.47346 13.4152 1.72791 13.2277 1.91555L6.15569 8.98755C6.06287 9.08036 5.95264 9.15394 5.83131 9.20405C5.70999 9.25416 5.57996 9.27981 5.4487 9.27955Z" fill="#2FAB73"/>
                            </svg>
                        </div>
                        <div style={{fontSize: '.875rem'}}>{item}</div>
                    </div>
                    )
                }
            </div>
            <div style={{marginBottom: '1.25rem', textAlign: 'center'}}>{price}</div>
            <Button
                name='Select'
                width='177.88px'
                color='#ba55d3'
                borderRadius='4px'
                border='4px solid #BA55D3'
                padding='.6rem 2rem'
            />
        </div>
    )
}
import Button from '../Button/Button'

export default function CallToAction() {
    return(
        <div style={{maxWidth: '1200px', padding: '6rem 3rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h2 style={{textAlign: 'center', fontSize: '2.188rem', color: '#0b132a', fontWeight: '500', lineHeight: '3.125rem', marginBottom: '1.25rem', maxWidth: '400px'}}>Get Started With Paddle Today</h2>
            <p style={{margin: '0 auto', maxWidth: '555px', textAlign: 'center', fontSize: '1rem', color: '#4f5665',marginBottom: '3.75rem', fontWeight: '', lineHeight: '1.875rem'}}>
            Praesent mollis lobortis nisl nec laoreet. Duis euismod nisl nec ante egestas ullamcorper
            </p>
            <Button
                name='Start Today'
                backgroundColor='#BA55D3'
                color='#ffffff'
                borderRadius='4px'
                border='4px solid #BA55D3'
                padding='.6rem 3rem'
            />
        </div>
    )
}
import Button from "../Button/Button";

export default function Subscribe() {
    return(
        <div style={{backgroundColor: 'white', borderRadius: '10px',  padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto', flexWrap: 'wrap'}}>
            <div>
                <h2 style={{fontSize: '2.188rem', color: '#0b132a', fontWeight: '500', lineHeight: '3.125rem', marginBottom: '1.25rem', }}>Subscribe Now for <br/>Get Special Features!</h2>
                <p style={{maxWidth: '555px', fontSize: '1rem', color: '#4f5665',lineHeight: '1.875rem'}}>
                Praesent mollis lobortis nisl nec laoreet.
                </p>
            </div>
            <div>
                <Button
                    name='Subscribe Now'
                    backgroundColor='#BA55D3'
                    color='#ffffff'
                    borderRadius='4px'
                    border='4px solid #BA55D3'
                    padding='.6rem 2rem'
                    width='max-content'
                />
            </div>
        </div>
    )
}
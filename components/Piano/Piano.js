import Image from 'next/image'

import piano from '../../public/assets/images/piano.png'

import styles from './Piano.module.css'

export default function Piano() {
    return(
        <div className={styles.container} style={{padding: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', maxWidth: '1200px'}}>
            <div style={{maxWidth: '737px'}}>
                <Image src={piano} width={737} height={296} alt={piano} />
            </div>
            <div style={{maxWidth: '400px'}}>
                <h2 style={{fontSize: '2.188rem', color: '#0b132a', fontWeight: '500', lineHeight: '3.125rem', marginBottom: '1.25rem'}}>Features We Provide For You</h2>
                <p style={{fontSize: '1rem', color: '#4f5665',marginBottom: '1.25rem', fontWeight: '', lineHeight: '1.875rem'}}>
                Curabitur tempor justo non turpis malesuada cursus. Mauris ac libero eu sem finibus lacinia nec pulvinar.
                </p>
                <List
                    name='Curabitur tempor justo'
                />
                <List
                    name='Curabitur tempor justo'
                />
                <List
                    name='Curabitur tempor justo'
                />
                <List
                    name='Curabitur tempor justo'
                />
            </div>
        </div>
    )
}

const List = ({name}) => {
    return(
        <div style={{display: 'flex', alignItems: 'center', marginBottom: '1.625rem'}}>
            <div style={{marginRight: '.5rem', width:'30px'}}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="20" rx="4" fill="#BA55D3"/>
                </svg>
            </div>
            <div style={{fontSize: '.875rem', color: '#4f5665'}}>
                {name}
            </div>
        </div>
    )
}
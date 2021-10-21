import c1 from '../../public/assets/images/c1.png'
import c2 from '../../public/assets/images/c2.png'
import c3 from '../../public/assets/images/c3.png'

import Image from 'next/image'

export default function Customers() {
    return(
        <div style={{maxWidth: '1200px', padding: '4rem 3rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem', overflowX: 'hidden'}}>
            <h2 style={{textAlign: 'center', fontSize: '2.188rem', color: '#0b132a', fontWeight: '500', lineHeight: '3.125rem', marginBottom: '1.25rem', maxWidth: '400px'}}>Trusted by Thousands of Happy Customer</h2>
            <p style={{margin: '0 auto', maxWidth: '555px', textAlign: 'center', fontSize: '1rem', color: '#4f5665',marginBottom: '3.75rem', lineHeight: '1.875rem'}}>
            Nam laoreet cursus diam, sed tristique arcu semper non. Suspendisse et suscipit est, nec laoreet mi. Nunc pellentesque imperdiet ultricies. 
            </p>
            <div style={{marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', overflowX: 'hidden'}}>
                <div>
                <Card
                    image={c1}
                    name='Viezh Robert'
                    location='Warsaw, Poland'
                    review='Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor. Ut rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce arcu ex'
                />
                </div>
                
                <div>
                <Card
                    image={c2}
                    name='Yessica Christy'
                    location='Warsaw, Poland'
                    review='Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor. Ut rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce arcu ex'
                />
                </div>
                
                <div>
                <Card
                    image={c3}
                    name='Kim Young Jou'
                    location='Warsaw, Poland'
                    review='Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor. Ut rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce arcu ex'
                />
                </div>
                
            </div>
            <div style={{display: 'flex'}}>
                <div style={{marginRight: '.5rem'}}>
                    <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="30" cy="30.2529" r="28.5" stroke="#BA55D3" strokeWidth="3"/>
                        <path d="M38.75 29.0029H23.925L28.4625 23.5529C28.6747 23.2976 28.7768 22.9685 28.7463 22.638C28.7158 22.3075 28.5553 22.0026 28.3 21.7904C28.0447 21.5782 27.7156 21.4762 27.3851 21.5066C27.0546 21.5371 26.7497 21.6976 26.5375 21.9529L20.2875 29.4529C20.2455 29.5126 20.2078 29.5752 20.175 29.6404C20.175 29.7029 20.175 29.7404 20.0875 29.8029C20.0308 29.9462 20.0012 30.0988 20 30.2529C20.0012 30.407 20.0308 30.5596 20.0875 30.7029C20.0875 30.7654 20.0875 30.8029 20.175 30.8654C20.2078 30.9306 20.2455 30.9933 20.2875 31.0529L26.5375 38.5529C26.655 38.694 26.8022 38.8075 26.9686 38.8853C27.1349 38.963 27.3164 39.0032 27.5 39.0029C27.7921 39.0035 28.0751 38.9018 28.3 38.7154C28.4266 38.6105 28.5312 38.4816 28.6079 38.3362C28.6846 38.1907 28.7318 38.0316 28.7469 37.8679C28.762 37.7042 28.7447 37.5391 28.6959 37.3821C28.6471 37.2251 28.5678 37.0792 28.4625 36.9529L23.925 31.5029H38.75C39.0815 31.5029 39.3995 31.3712 39.6339 31.1368C39.8683 30.9024 40 30.5844 40 30.2529C40 29.9214 39.8683 29.6034 39.6339 29.369C39.3995 29.1346 39.0815 29.0029 38.75 29.0029Z" fill="#BA55D3"/>
                    </svg>
                </div>
                <div>
                    <svg width="60" height="61" viewBox="0 0 60 61" fill="#BA55D3" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="30" cy="30.2529" r="28.5" stroke="#BA55D3" strokeWidth="3"/>
                        <path d="M65.25 59.0029H80.075L75.5375 53.5529C75.3253 53.2976 75.2232 52.9685 75.2537 52.638C75.2842 52.3075 75.4447 52.0026 75.7 51.7904C75.9553 51.5782 76.2844 51.4762 76.6149 51.5066C76.9454 51.5371 77.2503 51.6976 77.4625 51.9529L83.7125 59.4529C83.7545 59.5126 83.7922 59.5752 83.825 59.6404C83.825 59.7029 83.825 59.7404 83.9125 59.8029C83.9692 59.9462 83.9988 60.0988 84 60.2529C83.9988 60.407 83.9692 60.5596 83.9125 60.7029C83.9125 60.7654 83.9125 60.8029 83.825 60.8654C83.7922 60.9306 83.7545 60.9933 83.7125 61.0529L77.4625 68.5529C77.345 68.694 77.1978 68.8075 77.0314 68.8853C76.8651 68.963 76.6836 69.0032 76.5 69.0029C76.2079 69.0035 75.9249 68.9018 75.7 68.7154C75.5734 68.6105 75.4688 68.4816 75.3921 68.3362C75.3154 68.1907 75.2682 68.0316 75.2531 67.8679C75.238 67.7042 75.2553 67.5391 75.3041 67.3821C75.3529 67.2251 75.4322 67.0792 75.5375 66.9529L80.075 61.5029H65.25C64.9185 61.5029 64.6005 61.3712 64.3661 61.1368C64.1317 60.9024 64 60.5844 64 60.2529C64 59.9214 64.1317 59.6034 64.3661 59.369C64.6005 59.1346 64.9185 59.0029 65.25 59.0029Z" fill="#ffffff"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

const Card = ({name, location, review, image}) => {
    return(
    <div style={{margin: '1rem', borderRadius: '4px', padding: '1rem', width: '354px', border: '3px solid #dddddd'}}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '.5rem'}}>
                <div style={{marginRight: '.5rem', width: '50px', height: '50px'}}>
                    <Image src={image} width={50} height={50} alt='c' />
                </div>
                <div>
                    <div style={{fontSize: '1.125rem', fontWeight: 500, color: '#0b132a'}}>{name}</div>
                    <div style={{fontSize: '.875rem'}}>{location}</div>
                </div>
            </div>
            <div style={{fontSize: '1rem'}}>4.5<span style={{marginLeft: '.5rem'}}><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.1891 5.41808L9.22187 4.84152L7.44844 1.24621C7.4 1.14777 7.32031 1.06808 7.22187 1.01965C6.975 0.897772 6.675 0.999334 6.55156 1.24621L4.77812 4.84152L0.810936 5.41808C0.701561 5.43371 0.601561 5.48527 0.524999 5.5634C0.432439 5.65853 0.381434 5.78652 0.383192 5.91924C0.38495 6.05197 0.439327 6.17856 0.534374 6.27121L3.40469 9.06965L2.72656 13.0212C2.71066 13.1131 2.72083 13.2077 2.75592 13.2941C2.79102 13.3805 2.84963 13.4554 2.92511 13.5102C3.00059 13.5651 3.08992 13.5976 3.18297 13.6043C3.27602 13.6109 3.36907 13.5913 3.45156 13.5478L7 11.6821L10.5484 13.5478C10.6453 13.5993 10.7578 13.6165 10.8656 13.5978C11.1375 13.5509 11.3203 13.2931 11.2734 13.0212L10.5953 9.06965L13.4656 6.27121C13.5437 6.19465 13.5953 6.09465 13.6109 5.98527C13.6531 5.71183 13.4625 5.45871 13.1891 5.41808Z" fill="#FEA250"/>
            </svg>
            </span>
            </div>
        </div>
        <div style={{fontSize: '1rem'}}>
        {review}
        </div>
    </div>
    )
}
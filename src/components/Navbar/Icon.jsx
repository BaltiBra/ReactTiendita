import icon from './icon.png'

function Logo  () {
        return (
           
            <img src={icon} className='NavbarLogo'
            style={{
                width: '80px',
				height: '80px',
                position: 'left 20px'               
           }}
            />
        )
}
export default Logo;

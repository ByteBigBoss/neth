import React from 'react'

const IMAGINECOREX_ICON = ({ className, baseClass, width, height }: IconProps) => {
  return (
    <svg width={width?width:"28"} height={height?height:"9"} viewBox="0 0 28 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width={width?width:"28"} height={height?height:"9"} rx="4.5" className={baseClass} />
      <path d="M27.9998 0.00244141C27.9998 0.459684 27.794 0.872852 27.4565 1.17399C27.121 1.47513 26.6579 1.65875 26.1455 1.65875H20.1997L21.9717 0.00244141H27.9998Z" className={className} />
      <path d="M6.89247 0.00634766L8.66448 1.66262H1.85433C1.34185 1.66262 0.878803 1.47533 0.543322 1.17786C0.205801 0.876722 0 0.463555 0 0.00634766H6.89247Z" className={className} />
      <path d="M13.8138 2.89145L12.5315 4.09049L8.13965 0.00488281H12.406L11.7659 0.976257L13.8138 2.89145Z" className={className} />
      <path d="M24.6014 2.98975C24.6014 3.44695 24.3956 3.86012 24.0581 4.16126C23.7205 4.4624 23.2575 4.64602 22.745 4.64602H17.0112L18.7276 2.98975H24.6014Z" className={className} />
      <path d="M11.8654 4.64797H6.22014C5.19521 4.64797 4.36377 3.90611 4.36377 2.9917H10.0934L11.8654 4.64797Z" className={className} />
      <path d="M16.3511 5.26221L15.0698 6.46049L16.6982 8.08957L16.1687 9.00024H17.6091H17.6406H20.1964L16.3511 5.26221Z" className={className} />
      <path d="M16.1494 0L17.0095 1.07587L8.44922 8.99989H11.0173H11.0241H12.4975L11.9831 8.12106L14.9846 5.36957L18.9548 1.65602L20.7258 0H16.1494Z" className={className} />
    </svg>
  )
}

export default IMAGINECOREX_ICON

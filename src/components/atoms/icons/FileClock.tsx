
type FileClockProps = {
  disabled?: boolean;
  action: () => void;
};

function FileClock({ disabled = false, action }: FileClockProps) {
  const fillColor = disabled ? "#B0B0B0" : "#3F51B5";
  return (
    <button disabled={disabled} onClick={action} type="button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <mask
          id="path-1-outside-1_2494_67522"
          maskUnits="userSpaceOnUse"
          x="-0.835938"
          y="-0.289062"
          width="25"
          height="24"
          fill="black"
        >
          <rect
            fill="white"
            x="-0.835938"
            y="-0.289062"
            width="25"
            height="24"
          />
          <path d="M21.6397 10.0303C22.7135 10.0303 23.5872 9.15678 23.5872 8.08269V6.02853C23.5872 5.97891 23.5775 5.92977 23.5585 5.88392C23.5395 5.83808 23.5116 5.79642 23.4766 5.76133C23.4415 5.72624 23.3998 5.69841 23.354 5.67942C23.3081 5.66043 23.259 5.65067 23.2094 5.65067H20.448V2.65845C20.448 1.58464 19.5743 0.710938 18.5004 0.710938H3.63497C2.58652 0.710938 1.73386 1.56364 1.73386 2.61223V20.4882C1.73227 21.1441 1.19766 21.679 0.541875 21.6811H0.540844C0.332344 21.6818 0.163782 21.851 0.164063 22.0591C0.164081 22.1087 0.17387 22.1578 0.192869 22.2037C0.211868 22.2495 0.239706 22.2911 0.274794 22.3262C0.309881 22.3612 0.351531 22.389 0.397365 22.408C0.443199 22.427 0.492319 22.4367 0.541922 22.4367H2.67581C2.73857 22.4367 2.80034 22.4211 2.85548 22.3911L3.906 21.823L4.44497 22.3332C4.51521 22.3997 4.60826 22.4367 4.70498 22.4367C4.76891 22.4367 4.8318 22.4205 4.8877 22.3895L6.03314 21.755L7.1783 22.3895C7.22744 22.4167 7.28205 22.4326 7.33814 22.436C7.39422 22.4394 7.45036 22.4302 7.50244 22.4091L8.87695 21.8552L9.74836 22.382C9.80347 22.4154 9.86619 22.4341 9.93056 22.4364C9.99493 22.4386 10.0588 22.4244 10.1161 22.395L11.1686 21.855L12.3286 22.4008C12.379 22.4244 12.4338 22.4367 12.4894 22.4367H14.8303C14.8324 22.4367 14.8343 22.4362 14.8365 22.4362C15.7111 22.9743 16.7397 23.2855 17.8396 23.2855C21.009 23.2855 23.5872 20.7071 23.5872 17.5378C23.5872 14.3687 21.009 11.7904 17.8396 11.7904C17.6605 11.7904 17.4835 11.7997 17.3086 11.8159V10.0303L21.6397 10.0303ZM22.8316 6.40625V8.08269C22.8316 8.74011 22.2969 9.27481 21.6397 9.27481H21.5977C21.5944 9.27462 21.5915 9.27355 21.5884 9.27345C20.9505 9.24481 20.4494 8.72131 20.448 8.08273V6.4063L22.8316 6.40625ZM19.6926 2.65845V8.08386C19.6931 8.51518 19.8369 8.93411 20.1015 9.27477H17.3086V2.65944C17.31 2.03834 17.7769 1.52759 18.3941 1.47153C18.403 1.47059 18.4113 1.46787 18.4201 1.46652H18.5005C19.1577 1.46652 19.6926 2.00136 19.6926 2.65845ZM22.8316 17.5378C22.8316 20.2905 20.5924 22.5299 17.8397 22.5299C15.0871 22.5299 12.8475 20.2905 12.8475 17.5378C12.8475 14.7852 15.0871 12.5458 17.8397 12.5458C20.5923 12.5458 22.8316 14.7852 22.8316 17.5378ZM12.0921 17.5378C12.0921 19.1647 12.7725 20.6345 13.8625 21.6811H12.5738L11.3221 21.0923C11.2699 21.0677 11.2127 21.0554 11.1549 21.0564C11.0972 21.0574 11.0404 21.0716 10.9891 21.0981L9.95892 21.6266L9.10612 21.1111C9.05605 21.0806 8.99953 21.0622 8.94109 21.0575C8.88265 21.0528 8.82392 21.0619 8.76961 21.084L7.3868 21.6414L6.21595 20.9928C6.15996 20.9618 6.097 20.9455 6.03298 20.9455C5.96896 20.9455 5.90599 20.9618 5.85 20.9928L4.76363 21.5945L4.22672 21.086C4.16888 21.0314 4.09527 20.9964 4.01639 20.986C3.9375 20.9756 3.85735 20.9904 3.78736 21.0282L2.57991 21.6811H2.07788C2.33452 21.3514 2.48813 20.9377 2.4893 20.4892V2.61223C2.4893 1.9805 3.00328 1.46656 3.63492 1.46656H16.9592C16.7048 1.79614 16.5541 2.20925 16.5529 2.6585V11.9373C14.0014 12.5234 12.0921 14.8111 12.0921 17.5378ZM14.4046 5.5602C14.4046 5.60981 14.3948 5.65893 14.3758 5.70476C14.3568 5.75058 14.329 5.79222 14.2939 5.82729C14.2588 5.86236 14.2172 5.89018 14.1713 5.90915C14.1255 5.92813 14.0764 5.93789 14.0268 5.93787H5.01577C4.96615 5.93791 4.91702 5.92816 4.87117 5.90919C4.82533 5.89023 4.78367 5.86241 4.74858 5.82734C4.71349 5.79226 4.68565 5.75062 4.66666 5.70478C4.64767 5.65895 4.6379 5.60982 4.63791 5.5602C4.63789 5.51058 4.64766 5.46145 4.66665 5.4156C4.68563 5.36976 4.71347 5.3281 4.74856 5.29302C4.78365 5.25794 4.82531 5.23012 4.87116 5.21114C4.91701 5.19217 4.96615 5.18241 5.01577 5.18244H14.0268C14.0764 5.18243 14.1255 5.1922 14.1714 5.21118C14.2172 5.23016 14.2588 5.25799 14.2939 5.29307C14.329 5.32814 14.3568 5.36979 14.3758 5.41563C14.3948 5.46146 14.4046 5.51059 14.4046 5.5602ZM14.4046 7.96569C14.4046 8.06588 14.3648 8.16196 14.2939 8.2328C14.2231 8.30364 14.127 8.34344 14.0268 8.34345H5.01577C4.96615 8.34346 4.91702 8.33369 4.87118 8.31471C4.82534 8.29573 4.78369 8.26791 4.7486 8.23283C4.71351 8.19775 4.68568 8.1561 4.66668 8.11027C4.64769 8.06443 4.63791 8.0153 4.63791 7.96569C4.6379 7.91606 4.64767 7.86693 4.66666 7.82108C4.68564 7.77523 4.71348 7.73357 4.74857 7.69849C4.78365 7.6634 4.82531 7.63557 4.87116 7.61658C4.917 7.59759 4.96614 7.58782 5.01577 7.58783H14.0268C14.0764 7.58783 14.1255 7.5976 14.1714 7.61659C14.2172 7.63558 14.2589 7.66341 14.294 7.6985C14.329 7.73359 14.3569 7.77525 14.3758 7.82109C14.3948 7.86693 14.4046 7.91607 14.4046 7.96569ZM14.4046 10.3714C14.4046 10.4716 14.3647 10.5676 14.2939 10.6385C14.223 10.7093 14.127 10.7491 14.0268 10.7491H5.01577C4.96616 10.7491 4.91703 10.7393 4.87119 10.7204C4.82535 10.7014 4.78369 10.6736 4.7486 10.6385C4.71352 10.6034 4.68568 10.5618 4.66669 10.516C4.64769 10.4701 4.63791 10.421 4.63791 10.3714C4.63788 10.3218 4.64763 10.2726 4.6666 10.2268C4.68558 10.1809 4.71341 10.1392 4.7485 10.1041C4.7836 10.069 4.82526 10.0412 4.87112 10.0222C4.91698 10.0032 4.96613 9.99343 5.01577 9.99345H14.0268C14.0764 9.99345 14.1256 10.0032 14.1714 10.0222C14.2172 10.0412 14.2589 10.0691 14.294 10.1042C14.3291 10.1393 14.3569 10.1809 14.3759 10.2268C14.3949 10.2726 14.4046 10.3218 14.4046 10.3714ZM13.4206 12.7766C13.4206 12.8262 13.4109 12.8753 13.3919 12.9211C13.3729 12.967 13.3451 13.0086 13.31 13.0437C13.2749 13.0788 13.2333 13.1066 13.1874 13.1256C13.1416 13.1446 13.0924 13.1543 13.0428 13.1543H5.01577C4.80698 13.1543 4.63791 12.9853 4.63791 12.7766C4.63791 12.5678 4.80694 12.3988 5.01577 12.3988H13.0428C13.0924 12.3988 13.1416 12.4085 13.1874 12.4275C13.2332 12.4465 13.2749 12.4743 13.31 12.5094C13.3451 12.5445 13.3729 12.5861 13.3919 12.632C13.4108 12.6778 13.4206 12.727 13.4206 12.7766ZM11.7604 15.182C11.7604 15.2316 11.7507 15.2808 11.7317 15.3266C11.7127 15.3724 11.6849 15.4141 11.6498 15.4491C11.6148 15.4842 11.5731 15.512 11.5273 15.531C11.4815 15.55 11.4324 15.5597 11.3827 15.5597H5.01577C4.80698 15.5597 4.63791 15.3907 4.63791 15.182C4.63791 14.9734 4.80694 14.8041 5.01577 14.8041H11.3827C11.5914 14.8041 11.7604 14.9734 11.7604 15.182ZM11.3176 17.5872C11.3177 17.6368 11.3079 17.686 11.2889 17.7318C11.27 17.7777 11.2421 17.8194 11.2071 17.8545C11.172 17.8896 11.1303 17.9174 11.0845 17.9364C11.0386 17.9554 10.9895 17.9652 10.9399 17.9652H5.01577C4.96613 17.9652 4.91698 17.9554 4.87113 17.9364C4.82527 17.9174 4.78361 17.8896 4.74852 17.8545C4.71343 17.8194 4.6856 17.7777 4.66662 17.7319C4.64764 17.686 4.63788 17.6368 4.63791 17.5872C4.63791 17.3787 4.80694 17.2098 5.01577 17.2098H10.9399C11.1486 17.2099 11.3176 17.3787 11.3176 17.5872ZM15.0216 17.5378C15.0216 17.3293 15.1906 17.1599 15.3992 17.1599H17.4619V13.6996C17.4638 13.6007 17.5045 13.5065 17.5751 13.4372C17.6457 13.3679 17.7407 13.3291 17.8397 13.3291C17.9386 13.3291 18.0336 13.3679 18.1042 13.4372C18.1749 13.5065 18.2155 13.6007 18.2174 13.6996V17.5378C18.2174 17.5874 18.2077 17.6366 18.1887 17.6824C18.1697 17.7282 18.1419 17.7699 18.1068 17.805C18.0718 17.8401 18.0301 17.8679 17.9843 17.8869C17.9384 17.906 17.8893 17.9157 17.8397 17.9157H15.3992C15.3496 17.9157 15.3005 17.9059 15.2547 17.8869C15.2088 17.8679 15.1672 17.8401 15.1321 17.805C15.0971 17.7699 15.0692 17.7282 15.0503 17.6824C15.0313 17.6365 15.0215 17.5874 15.0216 17.5378Z" />
        </mask>
        <path
          d="M21.6397 10.0303C22.7135 10.0303 23.5872 9.15678 23.5872 8.08269V6.02853C23.5872 5.97891 23.5775 5.92977 23.5585 5.88392C23.5395 5.83808 23.5116 5.79642 23.4766 5.76133C23.4415 5.72624 23.3998 5.69841 23.354 5.67942C23.3081 5.66043 23.259 5.65067 23.2094 5.65067H20.448V2.65845C20.448 1.58464 19.5743 0.710938 18.5004 0.710938H3.63497C2.58652 0.710938 1.73386 1.56364 1.73386 2.61223V20.4882C1.73227 21.1441 1.19766 21.679 0.541875 21.6811H0.540844C0.332344 21.6818 0.163782 21.851 0.164063 22.0591C0.164081 22.1087 0.17387 22.1578 0.192869 22.2037C0.211868 22.2495 0.239706 22.2911 0.274794 22.3262C0.309881 22.3612 0.351531 22.389 0.397365 22.408C0.443199 22.427 0.492319 22.4367 0.541922 22.4367H2.67581C2.73857 22.4367 2.80034 22.4211 2.85548 22.3911L3.906 21.823L4.44497 22.3332C4.51521 22.3997 4.60826 22.4367 4.70498 22.4367C4.76891 22.4367 4.8318 22.4205 4.8877 22.3895L6.03314 21.755L7.1783 22.3895C7.22744 22.4167 7.28205 22.4326 7.33814 22.436C7.39422 22.4394 7.45036 22.4302 7.50244 22.4091L8.87695 21.8552L9.74836 22.382C9.80347 22.4154 9.86619 22.4341 9.93056 22.4364C9.99493 22.4386 10.0588 22.4244 10.1161 22.395L11.1686 21.855L12.3286 22.4008C12.379 22.4244 12.4338 22.4367 12.4894 22.4367H14.8303C14.8324 22.4367 14.8343 22.4362 14.8365 22.4362C15.7111 22.9743 16.7397 23.2855 17.8396 23.2855C21.009 23.2855 23.5872 20.7071 23.5872 17.5378C23.5872 14.3687 21.009 11.7904 17.8396 11.7904C17.6605 11.7904 17.4835 11.7997 17.3086 11.8159V10.0303L21.6397 10.0303ZM22.8316 6.40625V8.08269C22.8316 8.74011 22.2969 9.27481 21.6397 9.27481H21.5977C21.5944 9.27462 21.5915 9.27355 21.5884 9.27345C20.9505 9.24481 20.4494 8.72131 20.448 8.08273V6.4063L22.8316 6.40625ZM19.6926 2.65845V8.08386C19.6931 8.51518 19.8369 8.93411 20.1015 9.27477H17.3086V2.65944C17.31 2.03834 17.7769 1.52759 18.3941 1.47153C18.403 1.47059 18.4113 1.46787 18.4201 1.46652H18.5005C19.1577 1.46652 19.6926 2.00136 19.6926 2.65845ZM22.8316 17.5378C22.8316 20.2905 20.5924 22.5299 17.8397 22.5299C15.0871 22.5299 12.8475 20.2905 12.8475 17.5378C12.8475 14.7852 15.0871 12.5458 17.8397 12.5458C20.5923 12.5458 22.8316 14.7852 22.8316 17.5378ZM12.0921 17.5378C12.0921 19.1647 12.7725 20.6345 13.8625 21.6811H12.5738L11.3221 21.0923C11.2699 21.0677 11.2127 21.0554 11.1549 21.0564C11.0972 21.0574 11.0404 21.0716 10.9891 21.0981L9.95892 21.6266L9.10612 21.1111C9.05605 21.0806 8.99953 21.0622 8.94109 21.0575C8.88265 21.0528 8.82392 21.0619 8.76961 21.084L7.3868 21.6414L6.21595 20.9928C6.15996 20.9618 6.097 20.9455 6.03298 20.9455C5.96896 20.9455 5.90599 20.9618 5.85 20.9928L4.76363 21.5945L4.22672 21.086C4.16888 21.0314 4.09527 20.9964 4.01639 20.986C3.9375 20.9756 3.85735 20.9904 3.78736 21.0282L2.57991 21.6811H2.07788C2.33452 21.3514 2.48813 20.9377 2.4893 20.4892V2.61223C2.4893 1.9805 3.00328 1.46656 3.63492 1.46656H16.9592C16.7048 1.79614 16.5541 2.20925 16.5529 2.6585V11.9373C14.0014 12.5234 12.0921 14.8111 12.0921 17.5378ZM14.4046 5.5602C14.4046 5.60981 14.3948 5.65893 14.3758 5.70476C14.3568 5.75058 14.329 5.79222 14.2939 5.82729C14.2588 5.86236 14.2172 5.89018 14.1713 5.90915C14.1255 5.92813 14.0764 5.93789 14.0268 5.93787H5.01577C4.96615 5.93791 4.91702 5.92816 4.87117 5.90919C4.82533 5.89023 4.78367 5.86241 4.74858 5.82734C4.71349 5.79226 4.68565 5.75062 4.66666 5.70478C4.64767 5.65895 4.6379 5.60982 4.63791 5.5602C4.63789 5.51058 4.64766 5.46145 4.66665 5.4156C4.68563 5.36976 4.71347 5.3281 4.74856 5.29302C4.78365 5.25794 4.82531 5.23012 4.87116 5.21114C4.91701 5.19217 4.96615 5.18241 5.01577 5.18244H14.0268C14.0764 5.18243 14.1255 5.1922 14.1714 5.21118C14.2172 5.23016 14.2588 5.25799 14.2939 5.29307C14.329 5.32814 14.3568 5.36979 14.3758 5.41563C14.3948 5.46146 14.4046 5.51059 14.4046 5.5602ZM14.4046 7.96569C14.4046 8.06588 14.3648 8.16196 14.2939 8.2328C14.2231 8.30364 14.127 8.34344 14.0268 8.34345H5.01577C4.96615 8.34346 4.91702 8.33369 4.87118 8.31471C4.82534 8.29573 4.78369 8.26791 4.7486 8.23283C4.71351 8.19775 4.68568 8.1561 4.66668 8.11027C4.64769 8.06443 4.63791 8.0153 4.63791 7.96569C4.6379 7.91606 4.64767 7.86693 4.66666 7.82108C4.68564 7.77523 4.71348 7.73357 4.74857 7.69849C4.78365 7.6634 4.82531 7.63557 4.87116 7.61658C4.917 7.59759 4.96614 7.58782 5.01577 7.58783H14.0268C14.0764 7.58783 14.1255 7.5976 14.1714 7.61659C14.2172 7.63558 14.2589 7.66341 14.294 7.6985C14.329 7.73359 14.3569 7.77525 14.3758 7.82109C14.3948 7.86693 14.4046 7.91607 14.4046 7.96569ZM14.4046 10.3714C14.4046 10.4716 14.3647 10.5676 14.2939 10.6385C14.223 10.7093 14.127 10.7491 14.0268 10.7491H5.01577C4.96616 10.7491 4.91703 10.7393 4.87119 10.7204C4.82535 10.7014 4.78369 10.6736 4.7486 10.6385C4.71352 10.6034 4.68568 10.5618 4.66669 10.516C4.64769 10.4701 4.63791 10.421 4.63791 10.3714C4.63788 10.3218 4.64763 10.2726 4.6666 10.2268C4.68558 10.1809 4.71341 10.1392 4.7485 10.1041C4.7836 10.069 4.82526 10.0412 4.87112 10.0222C4.91698 10.0032 4.96613 9.99343 5.01577 9.99345H14.0268C14.0764 9.99345 14.1256 10.0032 14.1714 10.0222C14.2172 10.0412 14.2589 10.0691 14.294 10.1042C14.3291 10.1393 14.3569 10.1809 14.3759 10.2268C14.3949 10.2726 14.4046 10.3218 14.4046 10.3714ZM13.4206 12.7766C13.4206 12.8262 13.4109 12.8753 13.3919 12.9211C13.3729 12.967 13.3451 13.0086 13.31 13.0437C13.2749 13.0788 13.2333 13.1066 13.1874 13.1256C13.1416 13.1446 13.0924 13.1543 13.0428 13.1543H5.01577C4.80698 13.1543 4.63791 12.9853 4.63791 12.7766C4.63791 12.5678 4.80694 12.3988 5.01577 12.3988H13.0428C13.0924 12.3988 13.1416 12.4085 13.1874 12.4275C13.2332 12.4465 13.2749 12.4743 13.31 12.5094C13.3451 12.5445 13.3729 12.5861 13.3919 12.632C13.4108 12.6778 13.4206 12.727 13.4206 12.7766ZM11.7604 15.182C11.7604 15.2316 11.7507 15.2808 11.7317 15.3266C11.7127 15.3724 11.6849 15.4141 11.6498 15.4491C11.6148 15.4842 11.5731 15.512 11.5273 15.531C11.4815 15.55 11.4324 15.5597 11.3827 15.5597H5.01577C4.80698 15.5597 4.63791 15.3907 4.63791 15.182C4.63791 14.9734 4.80694 14.8041 5.01577 14.8041H11.3827C11.5914 14.8041 11.7604 14.9734 11.7604 15.182ZM11.3176 17.5872C11.3177 17.6368 11.3079 17.686 11.2889 17.7318C11.27 17.7777 11.2421 17.8194 11.2071 17.8545C11.172 17.8896 11.1303 17.9174 11.0845 17.9364C11.0386 17.9554 10.9895 17.9652 10.9399 17.9652H5.01577C4.96613 17.9652 4.91698 17.9554 4.87113 17.9364C4.82527 17.9174 4.78361 17.8896 4.74852 17.8545C4.71343 17.8194 4.6856 17.7777 4.66662 17.7319C4.64764 17.686 4.63788 17.6368 4.63791 17.5872C4.63791 17.3787 4.80694 17.2098 5.01577 17.2098H10.9399C11.1486 17.2099 11.3176 17.3787 11.3176 17.5872ZM15.0216 17.5378C15.0216 17.3293 15.1906 17.1599 15.3992 17.1599H17.4619V13.6996C17.4638 13.6007 17.5045 13.5065 17.5751 13.4372C17.6457 13.3679 17.7407 13.3291 17.8397 13.3291C17.9386 13.3291 18.0336 13.3679 18.1042 13.4372C18.1749 13.5065 18.2155 13.6007 18.2174 13.6996V17.5378C18.2174 17.5874 18.2077 17.6366 18.1887 17.6824C18.1697 17.7282 18.1419 17.7699 18.1068 17.805C18.0718 17.8401 18.0301 17.8679 17.9843 17.8869C17.9384 17.906 17.8893 17.9157 17.8397 17.9157H15.3992C15.3496 17.9157 15.3005 17.9059 15.2547 17.8869C15.2088 17.8679 15.1672 17.8401 15.1321 17.805C15.0971 17.7699 15.0692 17.7282 15.0503 17.6824C15.0313 17.6365 15.0215 17.5874 15.0216 17.5378Z"
          fill={fillColor}
          fill-opacity="1"
        />
        <path
          d="M21.6397 10.0303C22.7135 10.0303 23.5872 9.15678 23.5872 8.08269V6.02853C23.5872 5.97891 23.5775 5.92977 23.5585 5.88392C23.5395 5.83808 23.5116 5.79642 23.4766 5.76133C23.4415 5.72624 23.3998 5.69841 23.354 5.67942C23.3081 5.66043 23.259 5.65067 23.2094 5.65067H20.448V2.65845C20.448 1.58464 19.5743 0.710938 18.5004 0.710938H3.63497C2.58652 0.710938 1.73386 1.56364 1.73386 2.61223V20.4882C1.73227 21.1441 1.19766 21.679 0.541875 21.6811H0.540844C0.332344 21.6818 0.163782 21.851 0.164063 22.0591C0.164081 22.1087 0.17387 22.1578 0.192869 22.2037C0.211868 22.2495 0.239706 22.2911 0.274794 22.3262C0.309881 22.3612 0.351531 22.389 0.397365 22.408C0.443199 22.427 0.492319 22.4367 0.541922 22.4367H2.67581C2.73857 22.4367 2.80034 22.4211 2.85548 22.3911L3.906 21.823L4.44497 22.3332C4.51521 22.3997 4.60826 22.4367 4.70498 22.4367C4.76891 22.4367 4.8318 22.4205 4.8877 22.3895L6.03314 21.755L7.1783 22.3895C7.22744 22.4167 7.28205 22.4326 7.33814 22.436C7.39422 22.4394 7.45036 22.4302 7.50244 22.4091L8.87695 21.8552L9.74836 22.382C9.80347 22.4154 9.86619 22.4341 9.93056 22.4364C9.99493 22.4386 10.0588 22.4244 10.1161 22.395L11.1686 21.855L12.3286 22.4008C12.379 22.4244 12.4338 22.4367 12.4894 22.4367H14.8303C14.8324 22.4367 14.8343 22.4362 14.8365 22.4362C15.7111 22.9743 16.7397 23.2855 17.8396 23.2855C21.009 23.2855 23.5872 20.7071 23.5872 17.5378C23.5872 14.3687 21.009 11.7904 17.8396 11.7904C17.6605 11.7904 17.4835 11.7997 17.3086 11.8159V10.0303L21.6397 10.0303ZM22.8316 6.40625V8.08269C22.8316 8.74011 22.2969 9.27481 21.6397 9.27481H21.5977C21.5944 9.27462 21.5915 9.27355 21.5884 9.27345C20.9505 9.24481 20.4494 8.72131 20.448 8.08273V6.4063L22.8316 6.40625ZM19.6926 2.65845V8.08386C19.6931 8.51518 19.8369 8.93411 20.1015 9.27477H17.3086V2.65944C17.31 2.03834 17.7769 1.52759 18.3941 1.47153C18.403 1.47059 18.4113 1.46787 18.4201 1.46652H18.5005C19.1577 1.46652 19.6926 2.00136 19.6926 2.65845ZM22.8316 17.5378C22.8316 20.2905 20.5924 22.5299 17.8397 22.5299C15.0871 22.5299 12.8475 20.2905 12.8475 17.5378C12.8475 14.7852 15.0871 12.5458 17.8397 12.5458C20.5923 12.5458 22.8316 14.7852 22.8316 17.5378ZM12.0921 17.5378C12.0921 19.1647 12.7725 20.6345 13.8625 21.6811H12.5738L11.3221 21.0923C11.2699 21.0677 11.2127 21.0554 11.1549 21.0564C11.0972 21.0574 11.0404 21.0716 10.9891 21.0981L9.95892 21.6266L9.10612 21.1111C9.05605 21.0806 8.99953 21.0622 8.94109 21.0575C8.88265 21.0528 8.82392 21.0619 8.76961 21.084L7.3868 21.6414L6.21595 20.9928C6.15996 20.9618 6.097 20.9455 6.03298 20.9455C5.96896 20.9455 5.90599 20.9618 5.85 20.9928L4.76363 21.5945L4.22672 21.086C4.16888 21.0314 4.09527 20.9964 4.01639 20.986C3.9375 20.9756 3.85735 20.9904 3.78736 21.0282L2.57991 21.6811H2.07788C2.33452 21.3514 2.48813 20.9377 2.4893 20.4892V2.61223C2.4893 1.9805 3.00328 1.46656 3.63492 1.46656H16.9592C16.7048 1.79614 16.5541 2.20925 16.5529 2.6585V11.9373C14.0014 12.5234 12.0921 14.8111 12.0921 17.5378ZM14.4046 5.5602C14.4046 5.60981 14.3948 5.65893 14.3758 5.70476C14.3568 5.75058 14.329 5.79222 14.2939 5.82729C14.2588 5.86236 14.2172 5.89018 14.1713 5.90915C14.1255 5.92813 14.0764 5.93789 14.0268 5.93787H5.01577C4.96615 5.93791 4.91702 5.92816 4.87117 5.90919C4.82533 5.89023 4.78367 5.86241 4.74858 5.82734C4.71349 5.79226 4.68565 5.75062 4.66666 5.70478C4.64767 5.65895 4.6379 5.60982 4.63791 5.5602C4.63789 5.51058 4.64766 5.46145 4.66665 5.4156C4.68563 5.36976 4.71347 5.3281 4.74856 5.29302C4.78365 5.25794 4.82531 5.23012 4.87116 5.21114C4.91701 5.19217 4.96615 5.18241 5.01577 5.18244H14.0268C14.0764 5.18243 14.1255 5.1922 14.1714 5.21118C14.2172 5.23016 14.2588 5.25799 14.2939 5.29307C14.329 5.32814 14.3568 5.36979 14.3758 5.41563C14.3948 5.46146 14.4046 5.51059 14.4046 5.5602ZM14.4046 7.96569C14.4046 8.06588 14.3648 8.16196 14.2939 8.2328C14.2231 8.30364 14.127 8.34344 14.0268 8.34345H5.01577C4.96615 8.34346 4.91702 8.33369 4.87118 8.31471C4.82534 8.29573 4.78369 8.26791 4.7486 8.23283C4.71351 8.19775 4.68568 8.1561 4.66668 8.11027C4.64769 8.06443 4.63791 8.0153 4.63791 7.96569C4.6379 7.91606 4.64767 7.86693 4.66666 7.82108C4.68564 7.77523 4.71348 7.73357 4.74857 7.69849C4.78365 7.6634 4.82531 7.63557 4.87116 7.61658C4.917 7.59759 4.96614 7.58782 5.01577 7.58783H14.0268C14.0764 7.58783 14.1255 7.5976 14.1714 7.61659C14.2172 7.63558 14.2589 7.66341 14.294 7.6985C14.329 7.73359 14.3569 7.77525 14.3758 7.82109C14.3948 7.86693 14.4046 7.91607 14.4046 7.96569ZM14.4046 10.3714C14.4046 10.4716 14.3647 10.5676 14.2939 10.6385C14.223 10.7093 14.127 10.7491 14.0268 10.7491H5.01577C4.96616 10.7491 4.91703 10.7393 4.87119 10.7204C4.82535 10.7014 4.78369 10.6736 4.7486 10.6385C4.71352 10.6034 4.68568 10.5618 4.66669 10.516C4.64769 10.4701 4.63791 10.421 4.63791 10.3714C4.63788 10.3218 4.64763 10.2726 4.6666 10.2268C4.68558 10.1809 4.71341 10.1392 4.7485 10.1041C4.7836 10.069 4.82526 10.0412 4.87112 10.0222C4.91698 10.0032 4.96613 9.99343 5.01577 9.99345H14.0268C14.0764 9.99345 14.1256 10.0032 14.1714 10.0222C14.2172 10.0412 14.2589 10.0691 14.294 10.1042C14.3291 10.1393 14.3569 10.1809 14.3759 10.2268C14.3949 10.2726 14.4046 10.3218 14.4046 10.3714ZM13.4206 12.7766C13.4206 12.8262 13.4109 12.8753 13.3919 12.9211C13.3729 12.967 13.3451 13.0086 13.31 13.0437C13.2749 13.0788 13.2333 13.1066 13.1874 13.1256C13.1416 13.1446 13.0924 13.1543 13.0428 13.1543H5.01577C4.80698 13.1543 4.63791 12.9853 4.63791 12.7766C4.63791 12.5678 4.80694 12.3988 5.01577 12.3988H13.0428C13.0924 12.3988 13.1416 12.4085 13.1874 12.4275C13.2332 12.4465 13.2749 12.4743 13.31 12.5094C13.3451 12.5445 13.3729 12.5861 13.3919 12.632C13.4108 12.6778 13.4206 12.727 13.4206 12.7766ZM11.7604 15.182C11.7604 15.2316 11.7507 15.2808 11.7317 15.3266C11.7127 15.3724 11.6849 15.4141 11.6498 15.4491C11.6148 15.4842 11.5731 15.512 11.5273 15.531C11.4815 15.55 11.4324 15.5597 11.3827 15.5597H5.01577C4.80698 15.5597 4.63791 15.3907 4.63791 15.182C4.63791 14.9734 4.80694 14.8041 5.01577 14.8041H11.3827C11.5914 14.8041 11.7604 14.9734 11.7604 15.182ZM11.3176 17.5872C11.3177 17.6368 11.3079 17.686 11.2889 17.7318C11.27 17.7777 11.2421 17.8194 11.2071 17.8545C11.172 17.8896 11.1303 17.9174 11.0845 17.9364C11.0386 17.9554 10.9895 17.9652 10.9399 17.9652H5.01577C4.96613 17.9652 4.91698 17.9554 4.87113 17.9364C4.82527 17.9174 4.78361 17.8896 4.74852 17.8545C4.71343 17.8194 4.6856 17.7777 4.66662 17.7319C4.64764 17.686 4.63788 17.6368 4.63791 17.5872C4.63791 17.3787 4.80694 17.2098 5.01577 17.2098H10.9399C11.1486 17.2099 11.3176 17.3787 11.3176 17.5872ZM15.0216 17.5378C15.0216 17.3293 15.1906 17.1599 15.3992 17.1599H17.4619V13.6996C17.4638 13.6007 17.5045 13.5065 17.5751 13.4372C17.6457 13.3679 17.7407 13.3291 17.8397 13.3291C17.9386 13.3291 18.0336 13.3679 18.1042 13.4372C18.1749 13.5065 18.2155 13.6007 18.2174 13.6996V17.5378C18.2174 17.5874 18.2077 17.6366 18.1887 17.6824C18.1697 17.7282 18.1419 17.7699 18.1068 17.805C18.0718 17.8401 18.0301 17.8679 17.9843 17.8869C17.9384 17.906 17.8893 17.9157 17.8397 17.9157H15.3992C15.3496 17.9157 15.3005 17.9059 15.2547 17.8869C15.2088 17.8679 15.1672 17.8401 15.1321 17.805C15.0971 17.7699 15.0692 17.7282 15.0503 17.6824C15.0313 17.6365 15.0215 17.5874 15.0216 17.5378Z"
          stroke="black"
          stroke-opacity="0.56"
          stroke-width="0.18"
          mask="url(#path-1-outside-1_2494_67522)"
        />
      </svg>
    </button>
  );
}

export default FileClock;
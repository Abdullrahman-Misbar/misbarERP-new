type UnApprovedIcon_TP = {
  disabled: boolean;
  action?: () => void;
};

function UnApprovedIcon({ disabled, action }: UnApprovedIcon_TP) {
  const fillColor = disabled ? "#B0B0B0" : "#3F51B5";

  return (
    <div onClick={action} className="cursor-pointer">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.4 13.5969H3.2C3.30609 13.5969 3.40783 13.5547 3.48284 13.4797C3.55786 13.4047 3.6 13.303 3.6 13.1969C3.6 13.0908 3.55786 12.989 3.48284 12.914C3.40783 12.839 3.30609 12.7969 3.2 12.7969H2.4C2.29391 12.7969 2.19217 12.839 2.11716 12.914C2.04214 12.989 2 13.0908 2 13.1969C2 13.303 2.04214 13.4047 2.11716 13.4797C2.19217 13.5547 2.29391 13.5969 2.4 13.5969ZM8 12.7969H4.8C4.69391 12.7969 4.59217 12.839 4.51716 12.914C4.44214 12.989 4.4 13.0908 4.4 13.1969C4.4 13.303 4.44214 13.4047 4.51716 13.4797C4.59217 13.5547 4.69391 13.5969 4.8 13.5969H8C8.10609 13.5969 8.20783 13.5547 8.28284 13.4797C8.35786 13.4047 8.4 13.303 8.4 13.1969C8.4 13.0908 8.35786 12.989 8.28284 12.914C8.20783 12.839 8.10609 12.7969 8 12.7969ZM2.4 15.5969H7.6C7.70609 15.5969 7.80783 15.5547 7.88284 15.4797C7.95786 15.4047 8 15.303 8 15.1969C8 15.0908 7.95786 14.989 7.88284 14.914C7.80783 14.839 7.70609 14.7969 7.6 14.7969H2.4C2.29391 14.7969 2.19217 14.839 2.11716 14.914C2.04214 14.989 2 15.0908 2 15.1969C2 15.303 2.04214 15.4047 2.11716 15.4797C2.19217 15.5547 2.29391 15.5969 2.4 15.5969ZM5.6 16.7969H2.4C2.29391 16.7969 2.19217 16.839 2.11716 16.914C2.04214 16.989 2 17.0908 2 17.1969C2 17.303 2.04214 17.4047 2.11716 17.4797C2.19217 17.5547 2.29391 17.5969 2.4 17.5969H5.6C5.70609 17.5969 5.80783 17.5547 5.88284 17.4797C5.95786 17.4047 6 17.303 6 17.1969C6 17.0908 5.95786 16.989 5.88284 16.914C5.80783 16.839 5.70609 16.7969 5.6 16.7969Z"
          fill={fillColor}
          fill-opacity="1"
        />
        <path
          d="M22.8 13.6H22.0968C21.5644 13.3234 21.125 12.8966 20.8332 12.3724C20.5958 11.935 20.2609 11.5582 19.8544 11.2712C19.4364 10.9312 19.2 10.7232 19.2 10.4V7.564C19.1986 7.28402 19.1241 7.00926 18.9837 6.76698C18.8434 6.5247 18.6422 6.32331 18.4 6.1828V2.8C18.3992 2.05765 18.1039 1.34595 17.579 0.821036C17.054 0.296118 16.3423 0.000846945 15.6 0L5.6 0C5.49392 2.2655e-05 5.3922 0.0421803 5.3172 0.1172L0.1172 5.3172C0.0421803 5.3922 2.2655e-05 5.49392 0 5.6L0 21.2C0.000846945 21.9423 0.296118 22.654 0.821036 23.179C1.34595 23.7039 2.05765 23.9992 2.8 24H15.6C16.1644 23.9972 16.7149 23.8243 17.1795 23.5037C17.644 23.1832 18.0011 22.7299 18.204 22.2032C18.8747 22.0197 19.5032 21.7072 20.0544 21.2832C20.123 21.2301 20.2077 21.2019 20.2944 21.2032H22.8C23.1183 21.2032 23.4235 21.0768 23.6485 20.8517C23.8736 20.6267 24 20.3215 24 20.0032V14.8C24 14.4817 23.8736 14.1765 23.6485 13.9515C23.4235 13.7264 23.1183 13.6 22.8 13.6ZM5.2 1.3656V3.2C5.19937 3.73024 4.98845 4.23858 4.61351 4.61351C4.23858 4.98845 3.73024 5.19937 3.2 5.2H1.3656L5.2 1.3656ZM15.6 23.2H2.8C2.26976 23.1994 1.76142 22.9884 1.38649 22.6135C1.01155 22.2386 0.800635 21.7302 0.8 21.2V6H3.2C3.94235 5.99915 4.65405 5.70388 5.17896 5.17896C5.70388 4.65405 5.99915 3.94235 6 3.2V0.8H15.6C16.1302 0.800635 16.6386 1.01155 17.0135 1.38649C17.3884 1.76142 17.5994 2.26976 17.6 2.8V6C17.3376 5.99269 17.0775 6.0497 16.8422 6.16607C16.607 6.28244 16.4038 6.45463 16.2504 6.6676C15.4904 7.7036 15.7248 9.692 16.0668 10.7776C16.1904 11.1737 16.2067 11.5955 16.114 12H11.4C10.9141 12.0008 10.4421 12.1625 10.0578 12.4597C9.67339 12.757 9.39825 13.1731 9.27528 13.6432C9.15231 14.1133 9.18843 14.6109 9.378 15.0583C9.56757 15.5057 9.89993 15.8778 10.3232 16.1164C10.1952 16.2691 10.1016 16.4477 10.0491 16.6399C9.99648 16.8321 9.98608 17.0334 10.0186 17.23C10.051 17.4266 10.1256 17.6138 10.2373 17.7789C10.3489 17.944 10.4949 18.083 10.6652 18.1864C10.5525 18.3414 10.4731 18.5181 10.4321 18.7053C10.3911 18.8925 10.3893 19.0861 10.4269 19.2741C10.4645 19.462 10.5406 19.6401 10.6505 19.7971C10.7603 19.9541 10.9015 20.0867 11.0652 20.1864C10.9141 20.395 10.8237 20.6413 10.804 20.8981C10.7843 21.1549 10.8361 21.4121 10.9536 21.6413C11.0711 21.8705 11.2497 22.0627 11.4697 22.1966C11.6897 22.3305 11.9425 22.4009 12.2 22.4H16.8C16.9432 22.4 17.0776 22.3872 17.2136 22.3764C17.028 22.6305 16.7853 22.8375 16.505 22.9806C16.2247 23.1236 15.9147 23.1988 15.6 23.2ZM13.8 19.6H11.8C11.6409 19.6 11.4883 19.5368 11.3757 19.4243C11.2632 19.3117 11.2 19.1591 11.2 19C11.2 18.8409 11.2632 18.6883 11.3757 18.5757C11.4883 18.4632 11.6409 18.4 11.8 18.4H13.8C13.9591 18.4 14.1117 18.4632 14.2243 18.5757C14.3368 18.6883 14.4 18.8409 14.4 19C14.4 19.1591 14.3368 19.3117 14.2243 19.4243C14.1117 19.5368 13.9591 19.6 13.8 19.6ZM14.4 21C14.4 21.1591 14.3368 21.3117 14.2243 21.4243C14.1117 21.5368 13.9591 21.6 13.8 21.6H12.2C12.0409 21.6 11.8883 21.5368 11.7757 21.4243C11.6632 21.3117 11.6 21.1591 11.6 21C11.6 20.8409 11.6632 20.6883 11.7757 20.5757C11.8883 20.4632 12.0409 20.4 12.2 20.4H13.8C13.9591 20.4 14.1117 20.4632 14.2243 20.5757C14.3368 20.6883 14.4 20.8409 14.4 21ZM13.8 17.6H11.4C11.2409 17.6 11.0883 17.5368 10.9757 17.4243C10.8632 17.3117 10.8 17.1591 10.8 17C10.8 16.8409 10.8632 16.6883 10.9757 16.5757C11.0883 16.4632 11.2409 16.4 11.4 16.4H13.8C13.9591 16.4 14.1117 16.4632 14.2243 16.5757C14.3368 16.6883 14.4 16.8409 14.4 17C14.4 17.1591 14.3368 17.3117 14.2243 17.4243C14.1117 17.5368 13.9591 17.6 13.8 17.6ZM23.2 20C23.2 20.1061 23.1579 20.2078 23.0828 20.2828C23.0078 20.3579 22.9061 20.4 22.8 20.4H20.296C20.0276 20.3995 19.7669 20.4895 19.556 20.6556C18.7676 21.2676 17.798 21.5998 16.8 21.6H15.0596C15.188 21.3377 15.2298 21.0415 15.179 20.7539C15.1282 20.4663 14.9873 20.2024 14.7768 20C14.9107 19.8701 15.0171 19.7147 15.0898 19.5429C15.1625 19.3711 15.1999 19.1865 15.1999 19C15.1999 18.8135 15.1625 18.6289 15.0898 18.4571C15.0171 18.2853 14.9107 18.1299 14.7768 18C14.9294 17.8524 15.0461 17.6719 15.1182 17.4722C15.1902 17.2725 15.2157 17.059 15.1925 16.848C15.1693 16.637 15.0982 16.4341 14.9846 16.2548C14.8709 16.0755 14.7177 15.9246 14.5368 15.8136C14.688 15.6049 14.7784 15.3584 14.798 15.1014C14.8176 14.8444 14.7657 14.5871 14.648 14.3578C14.5302 14.1286 14.3513 13.9364 14.131 13.8026C13.9107 13.6689 13.6577 13.5987 13.4 13.6H11.6C11.4939 13.6 11.3922 13.6421 11.3172 13.7172C11.2421 13.7922 11.2 13.8939 11.2 14C11.2 14.1061 11.2421 14.2078 11.3172 14.2828C11.3922 14.3579 11.4939 14.4 11.6 14.4H13.4C13.5591 14.4 13.7117 14.4632 13.8243 14.5757C13.9368 14.6883 14 14.8409 14 15C14 15.1591 13.9368 15.3117 13.8243 15.4243C13.7117 15.5368 13.5591 15.6 13.4 15.6H11.4C11.0287 15.6 10.6726 15.4525 10.4101 15.1899C10.1475 14.9274 10 14.5713 10 14.2C10 13.8287 10.1475 13.4726 10.4101 13.2101C10.6726 12.9475 11.0287 12.8 11.4 12.8H15.8988C15.7168 13.327 15.616 13.8787 15.6 14.436C15.6 16.0784 17.52 17.1104 17.6 17.1536C17.6464 17.1782 17.6973 17.1933 17.7496 17.1982C17.8018 17.2032 17.8546 17.1977 17.9048 17.1823C17.955 17.1668 18.0017 17.1416 18.0421 17.1081C18.0826 17.0746 18.116 17.0334 18.1406 16.987C18.1652 16.9406 18.1803 16.8897 18.1852 16.8374C18.1902 16.7852 18.1847 16.7324 18.1693 16.6822C18.1538 16.632 18.1286 16.5853 18.0951 16.5449C18.0616 16.5044 18.0204 16.471 17.974 16.4464C17.96 16.44 16.4 15.5948 16.4 14.436C16.4194 13.9391 16.5138 13.4479 16.68 12.9792C16.7268 12.822 16.7736 12.6664 16.814 12.5132C17.0194 11.8708 17.0248 11.1812 16.8296 10.5356C16.5268 9.5756 16.3472 7.8888 16.8956 7.1408C16.9744 7.02887 17.0805 6.93886 17.2037 6.87923C17.3269 6.81961 17.4633 6.79234 17.6 6.8C17.6986 6.79913 17.7968 6.81164 17.892 6.8372C18.0421 6.88994 18.1718 6.98844 18.263 7.11883C18.3541 7.24922 18.402 7.40493 18.4 7.564V10.4C18.4 11.12 18.9044 11.53 19.3496 11.8916C19.6608 12.1058 19.9204 12.3866 20.1096 12.7136C20.4979 13.4283 21.099 14.0044 21.8296 14.362C21.8829 14.3872 21.9411 14.4002 22 14.4H22.8C22.9061 14.4 23.0078 14.4421 23.0828 14.5172C23.1579 14.5922 23.2 14.6939 23.2 14.8V20Z"
          fill={fillColor}
          fill-opacity="1"
        />
        <path
          d="M5.6 21.2031H4.8C4.69391 21.2031 4.59217 21.2453 4.51716 21.3203C4.44214 21.3953 4.4 21.497 4.4 21.6031C4.4 21.7092 4.44214 21.811 4.51716 21.886C4.59217 21.961 4.69391 22.0031 4.8 22.0031H5.6C5.70609 22.0031 5.80783 21.961 5.88284 21.886C5.95786 21.811 6 21.7092 6 21.6031C6 21.497 5.95786 21.3953 5.88284 21.3203C5.80783 21.2453 5.70609 21.2031 5.6 21.2031ZM3.2 21.2031H2.4C2.29391 21.2031 2.19217 21.2453 2.11716 21.3203C2.04214 21.3953 2 21.497 2 21.6031C2 21.7092 2.04214 21.811 2.11716 21.886C2.19217 21.961 2.29391 22.0031 2.4 22.0031H3.2C3.30609 22.0031 3.40783 21.961 3.48284 21.886C3.55786 21.811 3.6 21.7092 3.6 21.6031C3.6 21.497 3.55786 21.3953 3.48284 21.3203C3.40783 21.2453 3.30609 21.2031 3.2 21.2031ZM8 21.2031H7.2C7.09391 21.2031 6.99217 21.2453 6.91716 21.3203C6.84214 21.3953 6.8 21.497 6.8 21.6031C6.8 21.7092 6.84214 21.811 6.91716 21.886C6.99217 21.961 7.09391 22.0031 7.2 22.0031H8C8.10609 22.0031 8.20783 21.961 8.28284 21.886C8.35786 21.811 8.4 21.7092 8.4 21.6031C8.4 21.497 8.35786 21.3953 8.28284 21.3203C8.20783 21.2453 8.10609 21.2031 8 21.2031ZM10 21.2031H9.6C9.49391 21.2031 9.39217 21.2453 9.31716 21.3203C9.24214 21.3953 9.2 21.497 9.2 21.6031C9.2 21.7092 9.24214 21.811 9.31716 21.886C9.39217 21.961 9.49391 22.0031 9.6 22.0031H10C10.1061 22.0031 10.2078 21.961 10.2828 21.886C10.3579 21.811 10.4 21.7092 10.4 21.6031C10.4 21.497 10.3579 21.3953 10.2828 21.3203C10.2078 21.2453 10.1061 21.2031 10 21.2031Z"
          fill={fillColor}
          fill-opacity="1"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11 10.1429C13.0119 10.1429 14.6429 8.51189 14.6429 6.5C14.6429 4.48811 13.0119 2.85714 11 2.85714C8.98811 2.85714 7.35714 4.48811 7.35714 6.5C7.35714 8.51189 8.98811 10.1429 11 10.1429ZM11 11C13.4853 11 15.5 8.98528 15.5 6.5C15.5 4.01472 13.4853 2 11 2C8.51472 2 6.5 4.01472 6.5 6.5C6.5 8.98528 8.51472 11 11 11Z"
          fill={fillColor}
          fill-opacity="1"
        />
        <path
          d="M9.7 8.5L9 7.8L10.05 6.75L9 5.7L9.7 5L10.75 6.05L11.8 5L12.5 5.7L11.4625 6.75L12.5 7.8L11.8 8.5L10.75 7.4625L9.7 8.5Z"
          fill="#D32F2F"
        />
      </svg>
    </div>
  );
}

export default UnApprovedIcon;
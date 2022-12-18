export const Roadmap = ({ active }) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_1818)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.78947 5.05263C8.91745 5.05263 8.21053 5.75955 8.21053 6.63158C8.21053 7.50361 8.91745 8.21053 9.78947 8.21053H21.3684C22.2404 8.21053 22.9474 7.50361 22.9474 6.63158C22.9474 5.75955 22.2404 5.05263 21.3684 5.05263H9.78947ZM7.15789 6.63158C7.15789 5.1782 8.33609 4 9.78947 4H21.3684C22.8218 4 24 5.1782 24 6.63158C24 8.08496 22.8218 9.26316 21.3684 9.26316H9.78947C8.33609 9.26316 7.15789 8.08496 7.15789 6.63158ZM9.78947 19.7895C8.91745 19.7895 8.21053 20.4964 8.21053 21.3684C8.21053 22.2404 8.91745 22.9474 9.78947 22.9474H21.3684C22.2404 22.9474 22.9474 22.2404 22.9474 21.3684C22.9474 20.4964 22.2404 19.7895 21.3684 19.7895H9.78947ZM7.15789 21.3684C7.15789 19.915 8.33609 18.7368 9.78947 18.7368H21.3684C22.8218 18.7368 24 19.915 24 21.3684C24 22.8218 22.8218 24 21.3684 24H9.78947C8.33609 24 7.15789 22.8218 7.15789 21.3684ZM5.05263 14C5.05263 13.128 5.75955 12.4211 6.63158 12.4211H15.0526C15.9247 12.4211 16.6316 13.128 16.6316 14C16.6316 14.872 15.9247 15.5789 15.0526 15.5789H6.63158C5.75955 15.5789 5.05263 14.872 5.05263 14ZM6.63158 11.3684C5.1782 11.3684 4 12.5466 4 14C4 15.4534 5.1782 16.6316 6.63158 16.6316H15.0526C16.506 16.6316 17.6842 15.4534 17.6842 14C17.6842 12.5466 16.506 11.3684 15.0526 11.3684H6.63158Z"
          fill={active ? "#0094FF" : "#8C939F"}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1818">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(4 4)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Schedule = ({ active }) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_1914)">
        <path
          d="M10.5898 14.5342H11.3364C11.8055 14.527 12.1743 14.4035 12.4429 14.1636C12.7114 13.9237 12.8457 13.5996 12.8457 13.1914C12.8457 12.2747 12.3892 11.8164 11.4761 11.8164C11.0464 11.8164 10.7026 11.9399 10.4448 12.187C10.1906 12.4305 10.0635 12.7546 10.0635 13.1592H9.06982C9.06982 12.5397 9.29541 12.0259 9.74658 11.6177C10.2013 11.2059 10.7778 11 11.4761 11C12.2137 11 12.792 11.1951 13.2109 11.5854C13.6299 11.9757 13.8394 12.5182 13.8394 13.2129C13.8394 13.5531 13.7284 13.8825 13.5063 14.2012C13.2879 14.5199 12.9889 14.758 12.6094 14.9155C13.0391 15.0516 13.3703 15.2772 13.603 15.5923C13.8394 15.9074 13.9575 16.2923 13.9575 16.7471C13.9575 17.4489 13.7284 18.0057 13.27 18.4175C12.8117 18.8293 12.2155 19.0352 11.4814 19.0352C10.7474 19.0352 10.1494 18.8364 9.6875 18.439C9.22917 18.0415 9 17.5169 9 16.8652H9.99902C9.99902 17.277 10.1333 17.6064 10.4019 17.8535C10.6704 18.1006 11.0303 18.2241 11.4814 18.2241C11.9613 18.2241 12.3283 18.0988 12.5825 17.8481C12.8368 17.5975 12.9639 17.2376 12.9639 16.7686C12.9639 16.3138 12.8242 15.9647 12.5449 15.7212C12.2656 15.4777 11.8628 15.3524 11.3364 15.3452H10.5898V14.5342Z"
          fill={active ? "#0094FF" : "#8C939F"}
        />
        <path
          d="M18.5874 18.9277H17.5884V12.3052L15.585 13.041V12.1387L18.4316 11.0698H18.5874V18.9277Z"
          fill={active ? "#0094FF" : "#8C939F"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 6.5C5.44772 6.5 5 6.94772 5 7.5V22.5C5 23.0523 5.44772 23.5 6 23.5H21C21.5523 23.5 22 23.0523 22 22.5V7.5C22 6.94772 21.5523 6.5 21 6.5H6ZM4 7.5C4 6.39543 4.89543 5.5 6 5.5H21C22.1046 5.5 23 6.39543 23 7.5V22.5C23 23.6046 22.1046 24.5 21 24.5H6C4.89543 24.5 4 23.6046 4 22.5V7.5Z"
          fill={active ? "#0094FF" : "#8C939F"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 8C7.72386 8 7.5 7.77614 7.5 7.5V4.5C7.5 4.22386 7.72386 4 8 4V4C8.27614 4 8.5 4.22386 8.5 4.5V7.5C8.5 7.77614 8.27614 8 8 8V8Z"
          fill={active ? "#0094FF" : "#8C939F"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19 8C18.7239 8 18.5 7.77614 18.5 7.5V4.5C18.5 4.22386 18.7239 4 19 4V4C19.2761 4 19.5 4.22386 19.5 4.5V7.5C19.5 7.77614 19.2761 8 19 8V8Z"
          fill={active ? "#0094FF" : "#8C939F"}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1914">
          <rect
            width="19"
            height="20.5"
            fill="white"
            transform="translate(4 4)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Tasks = ({ active }) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_1907)">
        <path
          d="M20.046 5.3H17.877C17.7243 4.83366 17.4439 4.41952 17.0675 4.10467C16.6911 3.78983 16.234 3.58691 15.748 3.519C15.5647 3.07079 15.2521 2.68729 14.8501 2.41735C14.448 2.14741 13.9747 2.00327 13.4905 2.00327C13.0063 2.00327 12.533 2.14741 12.1309 2.41735C11.7289 2.68729 11.4163 3.07079 11.233 3.519C10.7506 3.59039 10.2977 3.79488 9.92515 4.1095C9.55259 4.42411 9.27515 4.83639 9.124 5.3H6.955C6.17239 5.30079 5.42199 5.61169 4.86814 6.16461C4.31428 6.71753 4.00212 7.4674 4 8.25L4 23.816C4.00079 24.5995 4.31238 25.3506 4.86638 25.9046C5.42037 26.4586 6.17153 26.7702 6.955 26.771H20.046C20.8293 26.7699 21.5802 26.4582 22.134 25.9043C22.6878 25.3503 22.9992 24.5993 23 23.816V8.25C22.9979 7.46757 22.6859 6.71785 22.1322 6.16496C21.5786 5.61207 20.8284 5.30106 20.046 5.3ZM10.011 6.1C10.011 5.67566 10.1796 5.26869 10.4796 4.96863C10.7797 4.66857 11.1867 4.5 11.611 4.5C11.7235 4.4992 11.8326 4.46105 11.9211 4.39155C12.0096 4.32205 12.0725 4.22513 12.1 4.116C12.176 3.80513 12.3533 3.52837 12.6038 3.32924C12.8544 3.13011 13.164 3.01992 13.484 3.016C13.804 3.01118 14.116 3.11613 14.368 3.31337C14.62 3.51061 14.7968 3.78823 14.869 4.1C14.8936 4.21402 14.9568 4.31606 15.0479 4.38892C15.1389 4.46179 15.2524 4.50102 15.369 4.5H15.394C15.8183 4.5 16.2253 4.66857 16.5254 4.96863C16.8254 5.26869 16.994 5.67566 16.994 6.1V6.838H10.011V6.1ZM21.986 23.816C21.9855 24.3304 21.7809 24.8235 21.4172 25.1872C21.0535 25.5509 20.5604 25.7555 20.046 25.756H6.955C6.44064 25.7555 5.9475 25.5509 5.5838 25.1872C5.22009 24.8235 5.01553 24.3304 5.015 23.816V8.25C5.01553 7.73564 5.22009 7.24251 5.5838 6.8788C5.9475 6.51509 6.44064 6.31053 6.955 6.31H9V7.35C9 7.48473 9.05352 7.61394 9.14879 7.70921C9.24406 7.80448 9.37327 7.858 9.508 7.858H17.5C17.6347 7.858 17.7639 7.80448 17.8592 7.70921C17.9545 7.61394 18.008 7.48473 18.008 7.35V6.311H20.049C20.5634 6.31153 21.0565 6.51609 21.4202 6.8798C21.7839 7.24351 21.9885 7.73664 21.989 8.251L21.986 23.816Z"
          fill={active ? "#0094FF" : "#8C939F"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.6191 13.6175C18.8144 13.8127 18.8144 14.1293 18.6191 14.3246L12.8032 20.1406C12.7094 20.2343 12.5822 20.287 12.4496 20.287C12.317 20.287 12.1898 20.2343 12.0961 20.1405L9.14637 17.1905C8.95112 16.9953 8.95113 16.6787 9.1464 16.4834C9.34167 16.2882 9.65826 16.2882 9.85351 16.4835L12.4497 19.0799L17.912 13.6175C18.1073 13.4222 18.4239 13.4222 18.6191 13.6175Z"
          fill={active ? "#0094FF" : "#8C939F"}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1907">
          <rect
            width="19.001"
            height="24.771"
            fill="white"
            transform="translate(4 2)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Notes = ({ active }) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_1896)">
        <path
          d="M17.481 17.102H8.95103C8.84349 17.102 8.74035 17.1447 8.66431 17.2208C8.58826 17.2968 8.54553 17.4 8.54553 17.5075C8.54553 17.6151 8.58826 17.7182 8.66431 17.7943C8.74035 17.8703 8.84349 17.913 8.95103 17.913H17.481C17.5886 17.913 17.6917 17.8703 17.7678 17.7943C17.8438 17.7182 17.8865 17.6151 17.8865 17.5075C17.8865 17.4 17.8438 17.2968 17.7678 17.2208C17.6917 17.1447 17.5886 17.102 17.481 17.102Z"
          fill={active ? "#0094FF" : "#8C939F"}
        />
        <path
          d="M17.481 13.858H8.95103C8.84349 13.858 8.74035 13.9007 8.66431 13.9768C8.58826 14.0528 8.54553 14.156 8.54553 14.2635C8.54553 14.371 8.58826 14.4742 8.66431 14.5502C8.74035 14.6263 8.84349 14.669 8.95103 14.669H17.481C17.5886 14.669 17.6917 14.6263 17.7678 14.5502C17.8438 14.4742 17.8865 14.371 17.8865 14.2635C17.8865 14.156 17.8438 14.0528 17.7678 13.9768C17.6917 13.9007 17.5886 13.858 17.481 13.858Z"
          fill={active ? "#0094FF" : "#8C939F"}
        />
        <path
          d="M8.95201 11.021H13.428C13.5356 11.021 13.6387 10.9783 13.7147 10.9023C13.7908 10.8262 13.8335 10.7231 13.8335 10.6155C13.8335 10.508 13.7908 10.4048 13.7147 10.3288C13.6387 10.2527 13.5356 10.21 13.428 10.21H8.95201C8.84447 10.21 8.74131 10.2527 8.66527 10.3288C8.58922 10.4048 8.54651 10.508 8.54651 10.6155C8.54651 10.7231 8.58922 10.8262 8.66527 10.9023C8.74131 10.9783 8.84447 11.021 8.95201 11.021Z"
          fill={active ? "#0094FF" : "#8C939F"}
        />
        <path
          d="M16.7422 22.9991L22.002 18.0332V7.0015C22.002 6.44974 21.5527 6.00052 21 6.00052H6C5.44922 6.00052 5 6.44974 5 7.0015V22.0025C5 22.5518 5.44922 22.9991 6 22.9991H16.7422ZM17.1406 23.9991H6C4.89844 23.9991 4 23.1035 4 22.0025V7.0015C4 5.89798 4.89844 5.00052 6 5.00052H21C22.1035 5.00052 23.002 5.89798 23.002 7.0015V18.4644L17.1406 23.9991Z"
          fill={active ? "#0094FF" : "#8C939F"}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1896">
          <rect
            width="19.002"
            height="18.999"
            fill="white"
            transform="translate(4 5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Files = ({ active }) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_1884)">
        <path
          d="M6 8.5H22C22.3978 8.5 22.7794 8.65804 23.0607 8.93934C23.342 9.22064 23.5 9.60218 23.5 10V20C23.5 20.3978 23.342 20.7794 23.0607 21.0607C22.7794 21.342 22.3978 21.5 22 21.5H7C6.60218 21.5 6.22064 21.342 5.93934 21.0607C5.65804 20.7794 5.5 20.3978 5.5 20V9C5.5 8.86739 5.55268 8.74021 5.64645 8.64645C5.74021 8.55268 5.86739 8.5 6 8.5V8.5Z"
          stroke={active ? "#0094FF" : "#8C939F"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 5.5H14C14.3978 5.5 14.7794 5.65804 15.0607 5.93934C15.342 6.22064 15.5 6.60218 15.5 7V8C15.5 8.13261 15.4473 8.25979 15.3536 8.35355C15.2598 8.44732 15.1326 8.5 15 8.5H6C5.86739 8.5 5.74021 8.44732 5.64645 8.35355C5.55268 8.25979 5.5 8.13261 5.5 8V7C5.5 6.60218 5.65804 6.22064 5.93934 5.93934C6.22064 5.65804 6.60218 5.5 7 5.5V5.5Z"
          stroke={active ? "#0094FF" : "#8C939F"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1884">
          <rect
            width="19"
            height="17"
            fill="white"
            transform="translate(5 5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export const Arrow = ({ active }) => {
  return (
    <svg
      className={active ? "no-rotate" : "rotate"}
      width="10"
      height="5"
      viewBox="0 0 10 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.2881 5C9.12151 5.00026 8.96008 4.94207 8.83186 4.83555L5.01278 1.63917L1.18681 4.72625C1.11443 4.78997 1.02993 4.83838 0.938384 4.86856C0.846842 4.89874 0.750152 4.91007 0.654126 4.90187C0.558099 4.89367 0.464719 4.86611 0.3796 4.82085C0.294481 4.77559 0.21938 4.71355 0.158812 4.63848C0.0982435 4.56341 0.0534589 4.47685 0.0271501 4.384C0.000841424 4.29115 -0.00644815 4.19393 0.00571964 4.09819C0.0178874 4.00245 0.0492613 3.91016 0.0979553 3.82687C0.146649 3.74358 0.211658 3.67101 0.289073 3.61352L4.5644 0.162105C4.6919 0.0572904 4.85175 8.48307e-07 5.01671 8.77149e-07C5.18167 9.05991e-07 5.34152 0.0572905 5.46902 0.162105L9.74435 3.72972C9.85661 3.82444 9.93722 3.95132 9.97534 4.09329C10.0135 4.23525 10.0073 4.38551 9.95758 4.52384C9.90789 4.66217 9.8171 4.78196 9.69742 4.86708C9.57773 4.95221 9.43489 4.99859 9.2881 5Z"
        fill="#8C939F"
      />
    </svg>
  );
};
export const Plus = ({ secondary }) => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.2185 4.2195H5.7815V0.7815C5.7815 0.574233 5.69916 0.375456 5.5526 0.228896C5.40604 0.0823364 5.20727 0 5 0C4.79273 0 4.59396 0.0823364 4.4474 0.228896C4.30084 0.375456 4.2185 0.574233 4.2185 0.7815V4.2195H0.7815C0.574233 4.2195 0.375456 4.30184 0.228896 4.4484C0.0823364 4.59496 0 4.79373 0 5.001C0 5.20827 0.0823364 5.40704 0.228896 5.5536C0.375456 5.70016 0.574233 5.7825 0.7815 5.7825H4.2195V9.2195C4.2195 9.42677 4.30184 9.62554 4.4484 9.7721C4.59496 9.91866 4.79373 10.001 5.001 10.001C5.20827 10.001 5.40704 9.91866 5.5536 9.7721C5.70016 9.62554 5.7825 9.42677 5.7825 9.2195V5.7815H9.2195C9.42677 5.7815 9.62554 5.69916 9.7721 5.5526C9.91866 5.40604 10.001 5.20727 10.001 5C10.001 4.79273 9.91866 4.59396 9.7721 4.4474C9.62554 4.30084 9.42677 4.2185 9.2195 4.2185L9.2185 4.2195Z"
        fill={secondary ? "#8C939F" : "#fff"}
      />
    </svg>
  );
};
export const Notification = () => {
  return (
    <svg
      width="19"
      height="21"
      viewBox="0 0 19 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5 20.5C10.1193 20.5008 10.7235 20.3086 11.2285 19.9502C11.7335 19.5917 12.1143 19.0849 12.318 18.5H6.682C6.88566 19.0849 7.26648 19.5917 7.77151 19.9502C8.27654 20.3086 8.8807 20.5008 9.5 20.5V20.5ZM16.5 13.086V8.5C16.4973 6.96831 15.9927 5.47971 15.0635 4.26207C14.1343 3.04443 12.8317 2.16486 11.355 1.758C11.2059 1.38809 10.9496 1.0712 10.6191 0.848043C10.2885 0.624884 9.89882 0.505646 9.5 0.505646C9.10118 0.505646 8.71146 0.624884 8.38091 0.848043C8.05037 1.0712 7.79409 1.38809 7.645 1.758C6.16842 2.16501 4.86587 3.04462 3.93668 4.26223C3.00749 5.47983 2.50286 6.96835 2.5 8.5V13.086L0.793 14.793C0.605451 14.9805 0.500057 15.2348 0.5 15.5V16.5C0.5 16.7652 0.605357 17.0196 0.792893 17.2071C0.98043 17.3946 1.23478 17.5 1.5 17.5H17.5C17.7652 17.5 18.0196 17.3946 18.2071 17.2071C18.3946 17.0196 18.5 16.7652 18.5 16.5V15.5C18.4999 15.2348 18.3946 14.9805 18.207 14.793L16.5 13.086Z"
        stroke="#8C939F"
      />
    </svg>
  );
};

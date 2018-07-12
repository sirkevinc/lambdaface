import React from 'react';
class LeftNavSVG extends React.Component {
  render() {
    switch (this.props.image) {
      case "All Posts":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
            <defs>
              <clipPath id="clip_0">
                <rect x="-42" y="-124" width="1440" height="1277" clipRule="evenodd" />
              </clipPath>
            </defs>
            <g clipPath="url(#clip_0)">
              <path fill={this.props.fill} stroke="none" d="M6.03153 7.2L1.16847 7.2C0.523346 7.2 0 6.67665 0 6.03153L0 1.16847C0 0.523346 0.523346 0 1.16847 0L6.03153 0C6.67665 0 7.2 0.523346 7.2 1.16847L7.2 6.03153C7.2 6.67665 6.67665 7.2 6.03153 7.2M14.8315 7.2L9.96847 7.2C9.32335 7.2 8.8 6.67665 8.8 6.03153L8.8 1.16847C8.8 0.523346 9.32335 0 9.96847 0L14.8315 0C15.4767 0 16 0.523346 16 1.16847L16 6.03153C16 6.67665 15.4767 7.2 14.8315 7.2M6.03153 16L1.16847 16C0.523346 16 0 15.4767 0 14.8315L0 9.96847C0 9.32335 0.523346 8.8 1.16847 8.8L6.03153 8.8C6.67665 8.8 7.2 9.32335 7.2 9.96847L7.2 14.8315C7.2 15.4767 6.67665 16 6.03153 16M14.8315 16L9.96847 16C9.32335 16 8.8 15.4767 8.8 14.8315L8.8 9.96847C8.8 9.32335 9.32335 8.8 9.96847 8.8L14.8315 8.8C15.4767 8.8 16 9.32335 16 9.96847L16 14.8315C16 15.4767 15.4767 16 14.8315 16" />
            </g>
          </svg>
        )

      case "Announcements":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16">
            <defs>
              <clipPath id="clip_0">
                <rect x="-41" y="-175" width="1440" height="1277" clipRule="evenodd" />
              </clipPath>
            </defs>
            <g clipPath="url(#clip_0)">
              <path fill={this.props.fill} stroke="none" d="M12.8323 0.607206C14.3194 -0.157425 15.2811 -0.350267 16.524 0.921312C17.766 2.19289 17.9246 4.63078 17.9246 5.38531C17.9246 6.14068 17.766 8.56763 16.524 9.84005C15.2811 11.1116 14.3194 10.9188 12.8323 10.1542C11.9811 9.71542 10.6723 9.27331 9.24257 8.97521C8.43686 8.80678 7.64229 9.30952 7.47771 10.1028C7.29343 10.9963 7.11343 11.8712 7.05343 12.187C6.91371 12.9196 7.15371 13.995 7.62086 14.7579C8.12657 15.5849 7.21886 16.523 6.462 16.3613C6.15337 16.3563 5.80165 16.3634 5.45005 16.3706C5.09858 16.3777 4.74723 16.3849 4.43914 16.3798C3.71571 16.3798 3.216 15.7348 3.28457 15.2809C3.32143 15.0409 3.87771 12.4329 4.31314 10.4059C4.506 9.5091 3.84514 8.68131 2.916 8.59121C1.25657 8.43121 0 6.93394 0 5.38026C0 3.73731 1.392 2.15584 3.19543 2.15584L5.98029 2.15584C8.46257 2.15584 11.3451 1.37268 12.8323 0.607206ZM12.3986 5.35921C12.3986 7.75163 13.3886 9.69184 14.6091 9.69184C15.8297 9.69184 16.8197 7.75163 16.8197 5.35921C16.8197 2.96679 15.8297 1.02657 14.6091 1.02657C13.3886 1.02657 12.3986 2.96679 12.3986 5.35921ZM14.2363 3.44173C14.7763 3.44173 15.2143 4.30068 15.2143 5.35921C15.2143 6.41773 14.7763 7.27668 14.2363 7.27668C13.6963 7.27668 13.2583 6.41773 13.2583 5.35921C13.2583 4.30068 13.6963 3.44173 14.2363 3.44173" fillRule="evenodd" />
            </g>
          </svg>
        )

      case "Design Team":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11">
            <defs>
              <clipPath id="clip_0">
                <rect x="-41" y="-268" width="1440" height="1277" clipRule="evenodd" />
              </clipPath>
            </defs>
            <g clipPath="url(#clip_0)">
              <path fill={this.props.fill} stroke="none" d="M0.843737 11L17.156 11C17.622 11 18 10.6307 18 10.175L18 8.8L16.3122 8.8L16.3122 0.825C16.3122 0.369325 15.9345 0 15.4685 0L2.53121 0C2.06547 0 1.68747 0.369325 1.68747 0.825L1.68747 8.8L0 8.8L0 10.175C0 10.6307 0.377713 11 0.843737 11ZM2.81246 8.25L15.1873 8.25L15.1873 1.1L2.81246 1.1L2.81246 8.25ZM7.03114 10.175L10.9686 10.175L10.9686 9.625L7.03114 9.625L7.03114 10.175Z" fillRule="evenodd" />
            </g>
          </svg>
        )

      case "Dev Team":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16">
            <defs>
              <clipPath id="clip_0">
                <rect x="-41" y="-220" width="1440" height="1277" clipRule="evenodd" />
              </clipPath>
            </defs>
            <g clipPath="url(#clip_0)">
              <path fill={this.props.fill} stroke="none" d="M0.84375 16L17.1563 16C17.6223 16 18 15.6171 18 15.1429L18 0.857143C18 0.382857 17.6223 0 17.1563 0L0.84375 0C0.378 0 0 0.382857 0 0.857143L0 15.1429C0 15.6171 0.378 16 0.84375 16ZM1.6875 0.857143C1.22175 0.857143 0.84375 1.24 0.84375 1.71429C0.84375 2.18857 1.22175 2.57143 1.6875 2.57143C2.15353 2.57143 2.53125 2.18857 2.53125 1.71429C2.53125 1.24 2.15353 0.857143 1.6875 0.857143ZM3.375 1.71429C3.375 1.24 3.753 0.857143 4.21875 0.857143C4.68478 0.857143 5.0625 1.24 5.0625 1.71429C5.0625 2.18857 4.68478 2.57143 4.21875 2.57143C3.753 2.57143 3.375 2.18857 3.375 1.71429ZM6.75 0.857143C6.28425 0.857143 5.90625 1.24 5.90625 1.71429C5.90625 2.18857 6.28425 2.57143 6.75 2.57143C7.21603 2.57143 7.59375 2.18857 7.59375 1.71429C7.59375 1.24 7.21603 0.857143 6.75 0.857143ZM17.1563 3.42857L0.84375 3.42857L0.84375 6.85714L17.1563 6.85714L17.1563 3.42857ZM4.21875 7.71429L4.21875 15.1429L0.84375 15.1429L0.84375 7.71429L4.21875 7.71429ZM5.0625 15.1429L17.1563 15.1429L17.1563 7.71429L5.0625 7.71429L5.0625 15.1429Z" fillRule="evenodd" />
            </g>
          </svg>
        )

      case "Marketing":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="9">
            <defs>
              <clipPath id="clip_0">
                <rect x="-41" y="-314" width="1440" height="1277" clipRule="evenodd" />
              </clipPath>
            </defs>
            <g clipPath="url(#clip_0)">
              <path fill={this.props.fill} stroke="none" d="M0.324177 8.7008C-0.0974617 8.30187 -0.113139 7.64062 0.3085 7.24169L4.83266 2.96194C5.18004 2.63249 5.74277 2.63249 6.09015 2.96194L9.27266 5.97307C9.51359 6.20103 9.9047 6.20103 10.1456 5.97307L13.3892 2.90417C13.631 2.67465 13.631 2.30304 13.3892 2.0743L12.2555 1.00163C11.8644 0.631579 12.1416 0 12.6936 0L17.047 0C17.5734 0 18 0.403617 18 0.900917L17.9992 5.01984C17.9992 5.54291 17.3316 5.80444 16.9414 5.43517L15.8142 4.36875C15.5717 4.13922 15.1797 4.13922 14.9371 4.36797L10.2925 8.75233C9.97071 9.0568 9.44841 9.0568 9.12661 8.75154L5.89789 5.6967C5.65696 5.46874 5.26585 5.46874 5.02491 5.6967L1.85066 8.7008C1.42902 9.09973 0.744991 9.09973 0.324177 8.7008" />
            </g>
          </svg>
        )

      case "HR":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="18">
            <defs>
              <clipPath id="clip_0">
                <rect x="-47" y="-354" width="1440" height="1277" clipRule="evenodd" />
              </clipPath>
            </defs>
            <g clipPath="url(#clip_0)">
              <path fill={this.props.fill} stroke="none" d="M4.00077 4.82947C5.3865 4.82947 6.50997 3.74846 6.50997 2.41436C6.50997 1.081 5.3865 0 4.00077 0C2.61426 0 1.4908 1.081 1.4908 2.41436C1.4908 3.74846 2.61426 4.82947 4.00077 4.82947ZM0.428681 11.4439L0 6.86087C0 6.24916 0.515337 5.7533 1.15107 5.7533L6.84893 5.7533C7.48466 5.7533 8 6.24916 8 6.86087L7.57362 11.452C7.54141 11.7995 7.24617 12.0703 6.8842 12.0851L6.56902 12.0976C6.31672 12.108 6.11273 12.2984 6.09509 12.5404L5.71396 17.3558C5.68558 17.7196 5.3704 18 4.99233 18L3.02684 18C2.64877 18 2.33359 17.7196 2.30521 17.3566L1.92101 12.5448C1.90491 12.3006 1.70015 12.108 1.44632 12.0984L1.13037 12.0858C0.761503 12.0718 0.461656 11.7966 0.428681 11.4439Z" fillRule="evenodd" />
            </g>
          </svg>
        )

      case "Product Managers":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
            <defs>
              <clipPath id="clip_0">
                <rect x="-42" y="-400" width="1440" height="1277" clipRule="evenodd" />
              </clipPath>
            </defs>
            <g clipPath="url(#clip_0)">
              <path fill={this.props.fill} stroke="none" d="M6.66002 0.105036C3.35114 0.622573 0.681346 3.18694 0.118548 6.37289C-0.237735 8.39191 0.230178 10.288 1.23856 11.8227C1.44508 12.1375 1.5288 12.5125 1.43577 12.8739L0.765998 15.4751C0.675764 15.8222 1.04786 16.1128 1.38182 15.9567L3.76789 14.8409C4.13348 14.6705 4.55395 14.6813 4.92884 14.8329C6.29722 15.3845 7.85538 15.5854 9.49075 15.2957C12.7689 14.7136 15.3857 12.1322 15.8992 8.95609C16.7485 3.70986 12.1066 -0.747062 6.66002 0.105036ZM5.05907 7.20704L11.3559 7.20704C11.8071 7.20704 12.1726 6.85454 12.1726 6.41953C12.1726 5.98451 11.8071 5.63201 11.3559 5.63201L5.05907 5.63201C4.6079 5.63201 4.24232 5.98451 4.24232 6.41953C4.24232 6.85454 4.6079 7.20704 5.05907 7.20704ZM9.56796 10.3715L5.05907 10.3715C4.6079 10.3715 4.24232 10.019 4.24232 9.58395C4.24232 9.14893 4.6079 8.79553 5.05907 8.79553L9.56796 8.79553C10.0191 8.79553 10.3847 9.14893 10.3847 9.58395C10.3847 10.019 10.0191 10.3715 9.56796 10.3715Z" fillRule="evenodd" />
            </g>
          </svg>
        )

      case "QA":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
            <defs>
              <clipPath id="clip_0">
                <rect x="-42" y="-445" width="1440" height="1277" clipRule="evenodd" />
              </clipPath>
            </defs>
            <g clipPath="url(#clip_0)">
              <path fill={this.props.fill} stroke="none" d="M13.3 10.99C13.5463 10.56 13.7436 10.0975 13.8793 9.61C14.3244 9.495 16 9.015 16 8.1825L16 7.79C16 6.685 14.0063 6.385 13.8818 6.3675C13.7468 5.8775 13.5503 5.415 13.3043 4.985C13.5848 4.6075 14.5499 3.1975 13.8541 2.5025L13.4973 2.125C12.9025 1.53 11.3834 2.46 11.0144 2.7C10.5781 2.4525 10.1093 2.2575 9.61425 2.1225C9.535 1.65 9.18822 0 8.20939 0L7.81761 0C6.97755 0 6.49526 1.7075 6.3875 2.135C5.89946 2.27 5.43717 2.4675 5.00689 2.715C4.66736 2.4625 3.212 1.4575 2.50195 2.1675L2.12492 2.4825C1.50612 3.1025 2.53445 4.735 2.72246 5.02C2.48444 5.445 2.29368 5.9 2.16242 6.38C1.75214 6.445 0 6.7825 0 7.79L0 8.1825C0 9.055 1.83739 9.54 2.17267 9.6225C2.30593 10.0975 2.4977 10.55 2.73621 10.97C2.53845 11.28 1.54987 12.905 2.16342 13.5175L2.5202 13.815C3.32751 14.6225 5.01389 13.2975 5.01389 13.2975L4.93539 13.2125C5.38267 13.4775 5.86696 13.6875 6.37875 13.83C6.4625 14.175 6.94754 16 7.81761 16L8.20939 16C9.35098 16 9.634 13.87 9.634 13.87L9.52924 13.8675C10.0468 13.735 10.5373 13.535 10.9921 13.28C11.3486 13.5175 12.8425 14.4525 13.4388 13.8575L13.8356 13.46C14.6316 12.6625 13.3365 11.035 13.3 10.99ZM8.00212 3.5025C5.51668 3.5025 3.50177 5.5175 3.50177 8.0025C3.50177 10.4875 5.51668 12.5025 8.00212 12.5025C10.4876 12.5025 12.5025 10.4875 12.5025 8.0025C12.5025 5.5175 10.4876 3.5025 8.00212 3.5025ZM5.00189 8.0025C5.00189 9.66 6.34525 11.0025 8.00212 11.0025C9.65925 11.0025 11.0024 9.66 11.0024 8.0025C11.0024 6.345 9.65925 5.0025 8.00212 5.0025C6.34525 5.0025 5.00189 6.345 5.00189 8.0025ZM6.50201 8.0025C6.50201 7.175 7.17381 6.5025 8.00212 6.5025C8.83069 6.5025 9.50224 7.175 9.50224 8.0025C9.50224 8.83 8.83069 9.5025 8.00212 9.5025C7.17381 9.5025 6.50201 8.83 6.50201 8.0025Z" fillRule="evenodd" />
            </g>
          </svg>
        )

      default:
        return (
          <div>
            No SVG Image Found
          </div>
        )
    }
  }
}

export default LeftNavSVG;
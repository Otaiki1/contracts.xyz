import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1rem;

    color: #3a3a3a;
    font-size: 1rem;
    font-weight: 400;
    transition: all 0.3s;
    background-color: inherit;
    padding: 1rem 2.4rem;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active
  /* &.active:link,
  &.active:visited  */ {
    color: white;
    background-color: #00b1ff;
    border-radius: 5px;
  }

  & svg {
    width: 24px;
    height: 24px;
    fill: #3a3a3a;
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg
  /* &.active:link svg,
  &.active:visited svg  */ {
    fill: white;
  }

  /* &:hover svg path {
    stroke: white;
  } */
`;

function SidebarLinks() {
  return (
    <ul className="flex flex-col gap-y-[20px] text-base font-normal leading-default">
      <li>
        <StyledNavLink to={""}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path d="M13.2 15.4999C13 15.5999 12.8 15.5999 12.6 15.6999C12.5 15.4999 12.4 15.2999 12.3 15.1999C11.5 14.4999 10.3 14.3999 9.3 14.9999C8.5 15.4999 8 16.4999 8 17.4999C8 17.9999 8.5 18.4999 9 18.3999C9.5 18.3999 10 17.8999 10 17.3999C10 17.0999 10.1 16.8999 10.3 16.6999C10.4 16.6999 10.5 16.5999 10.6 16.5999C10.3 17.1999 10.5 17.8999 11.1 18.2999C11.3 18.3999 11.4 18.3999 11.6 18.3999C12 18.3999 12.4 18.1999 12.7 17.8999C12.8 17.7999 13 17.6999 13.2 17.5999C13.3 17.9999 13.7 18.3999 14.2 18.3999H15C15.6 18.3999 16 17.9999 16 17.3999C16 16.8999 15.6 16.4999 15.1 16.3999C15 16.1999 15 16.0999 14.8 15.8999C14.5 15.5999 13.8 15.3999 13.2 15.4999ZM20 9.3999C20 9.2999 20 9.1999 19.9 9.0999V8.9999C19.9 8.8999 19.8 8.7999 19.7 8.6999L13.7 2.6999C13.6 2.5999 13.5 2.5999 13.4 2.4999H13.3C13.2 2.4999 13.1 2.4999 13 2.3999H7C5.3 2.4999 4 3.7999 4 5.4999V19.4999C4 21.1999 5.3 22.4999 7 22.4999H17C18.7 22.4999 20 21.1999 20 19.4999V9.3999C20 9.4999 20 9.4999 20 9.3999ZM14 5.8999L16.6 8.4999H15C14.4 8.4999 14 8.0999 14 7.4999V5.8999ZM18 19.4999C18 20.0999 17.6 20.4999 17 20.4999H7C6.4 20.4999 6 20.0999 6 19.4999V5.4999C6 4.8999 6.4 4.4999 7 4.4999H12V7.4999C12 9.1999 13.3 10.4999 15 10.4999H18V19.4999ZM9 10.4999H10C10.6 10.4999 11 10.0999 11 9.4999C11 8.8999 10.6 8.4999 10 8.4999H9C8.4 8.4999 8 8.8999 8 9.4999C8 10.0999 8.4 10.4999 9 10.4999Z" />
          </svg>
          <span>Dashboard</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path d="M13.2 15.4999C13 15.5999 12.8 15.5999 12.6 15.6999C12.5 15.4999 12.4 15.2999 12.3 15.1999C11.5 14.4999 10.3 14.3999 9.3 14.9999C8.5 15.4999 8 16.4999 8 17.4999C8 17.9999 8.5 18.4999 9 18.3999C9.5 18.3999 10 17.8999 10 17.3999C10 17.0999 10.1 16.8999 10.3 16.6999C10.4 16.6999 10.5 16.5999 10.6 16.5999C10.3 17.1999 10.5 17.8999 11.1 18.2999C11.3 18.3999 11.4 18.3999 11.6 18.3999C12 18.3999 12.4 18.1999 12.7 17.8999C12.8 17.7999 13 17.6999 13.2 17.5999C13.3 17.9999 13.7 18.3999 14.2 18.3999H15C15.6 18.3999 16 17.9999 16 17.3999C16 16.8999 15.6 16.4999 15.1 16.3999C15 16.1999 15 16.0999 14.8 15.8999C14.5 15.5999 13.8 15.3999 13.2 15.4999ZM20 9.3999C20 9.2999 20 9.1999 19.9 9.0999V8.9999C19.9 8.8999 19.8 8.7999 19.7 8.6999L13.7 2.6999C13.6 2.5999 13.5 2.5999 13.4 2.4999H13.3C13.2 2.4999 13.1 2.4999 13 2.3999H7C5.3 2.4999 4 3.7999 4 5.4999V19.4999C4 21.1999 5.3 22.4999 7 22.4999H17C18.7 22.4999 20 21.1999 20 19.4999V9.3999C20 9.4999 20 9.4999 20 9.3999ZM14 5.8999L16.6 8.4999H15C14.4 8.4999 14 8.0999 14 7.4999V5.8999ZM18 19.4999C18 20.0999 17.6 20.4999 17 20.4999H7C6.4 20.4999 6 20.0999 6 19.4999V5.4999C6 4.8999 6.4 4.4999 7 4.4999H12V7.4999C12 9.1999 13.3 10.4999 15 10.4999H18V19.4999ZM9 10.4999H10C10.6 10.4999 11 10.0999 11 9.4999C11 8.8999 10.6 8.4999 10 8.4999H9C8.4 8.4999 8 8.8999 8 9.4999C8 10.0999 8.4 10.4999 9 10.4999Z" />
          </svg>
          <span>My Contracts</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to={"contract-draft"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M10 19.5H5C4.46957 19.5 3.96086 19.2893 3.58579 18.9142C3.21071 18.5391 3 18.0304 3 17.5V7.5M3 7.5C3 6.96957 3.21071 6.46086 3.58579 6.08579C3.96086 5.71071 4.46957 5.5 5 5.5H19C19.5304 5.5 20.0391 5.71071 20.4142 6.08579C20.7893 6.46086 21 6.96957 21 7.5M3 7.5L11 12.845M21 7.5V11.5M21 7.5L15 11.5"
              stroke="#3A3A3A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 21.5V17.5C14 16.9696 14.2107 16.4609 14.5858 16.0858C14.9609 15.7107 15.4696 15.5 16 15.5C16.5304 15.5 17.0391 15.7107 17.4142 16.0858C17.7893 16.4609 18 16.9696 18 17.5V21.5M14 19.5H18M21 15.5V21.5"
              stroke="#3A3A3A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Contract AI</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13 3.5C13 3.23478 12.8946 2.98043 12.7071 2.79289C12.5196 2.60536 12.2652 2.5 12 2.5C11.7348 2.5 11.4804 2.60536 11.2929 2.79289C11.1053 2.98043 11 3.23478 11 3.5V4.25H10.443C9.37101 4.24993 8.33931 4.65839 7.5579 5.39224C6.7765 6.12608 6.30414 7.13014 6.23698 8.2L6.01598 11.734C5.93171 13.0814 5.47928 14.3799 4.70798 15.488C4.54861 15.7171 4.45124 15.9835 4.42532 16.2613C4.39941 16.5392 4.44584 16.819 4.56009 17.0736C4.67435 17.3281 4.85254 17.5488 5.07735 17.7142C5.30215 17.8795 5.56591 17.9838 5.84298 18.017L9.24998 18.425V19.5C9.24998 20.2293 9.53971 20.9288 10.0554 21.4445C10.5712 21.9603 11.2706 22.25 12 22.25C12.7293 22.25 13.4288 21.9603 13.9445 21.4445C14.4602 20.9288 14.75 20.2293 14.75 19.5V18.425L18.157 18.016C18.4339 17.9827 18.6975 17.8784 18.9221 17.7131C19.1468 17.5478 19.3249 17.3273 19.4391 17.0729C19.5534 16.8184 19.5998 16.5388 19.5741 16.2611C19.5483 15.9834 19.4511 15.7171 19.292 15.488C18.5206 14.38 18.0682 13.0815 17.984 11.734L17.763 8.201C17.6961 7.13096 17.2238 6.12665 16.4424 5.3926C15.661 4.65855 14.6291 4.24995 13.557 4.25H13V3.5ZM10.443 5.75C9.75255 5.74992 9.08805 6.01297 8.58476 6.48561C8.08147 6.95825 7.77723 7.60493 7.73398 8.294L7.51398 11.828C7.41232 13.449 6.8679 15.011 5.93998 16.344C5.92845 16.3606 5.9214 16.3798 5.91952 16.3999C5.91763 16.42 5.92098 16.4403 5.92924 16.4587C5.93749 16.4771 5.95037 16.4931 5.96662 16.505C5.98287 16.517 6.00194 16.5246 6.02198 16.527L9.75898 16.976C11.248 17.154 12.752 17.154 14.241 16.976L17.978 16.527C17.998 16.5246 18.0171 16.517 18.0333 16.505C18.0496 16.4931 18.0625 16.4771 18.0707 16.4587C18.079 16.4403 18.0823 16.42 18.0804 16.3999C18.0786 16.3798 18.0715 16.3606 18.06 16.344C17.1324 15.0109 16.5883 13.4489 16.487 11.828L16.266 8.294C16.2227 7.60493 15.9185 6.95825 15.4152 6.48561C14.9119 6.01297 14.2474 5.74992 13.557 5.75H10.443ZM12 20.75C11.31 20.75 10.75 20.19 10.75 19.5V18.75H13.25V19.5C13.25 20.19 12.69 20.75 12 20.75Z"
              fill="#3A3A3A"
            />
          </svg>
          <span>Notifications</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M4 18.5C4 17.4391 4.42143 16.4217 5.17157 15.6716C5.92172 14.9214 6.93913 14.5 8 14.5H16C17.0609 14.5 18.0783 14.9214 18.8284 15.6716C19.5786 16.4217 20 17.4391 20 18.5C20 19.0304 19.7893 19.5391 19.4142 19.9142C19.0391 20.2893 18.5304 20.5 18 20.5H6C5.46957 20.5 4.96086 20.2893 4.58579 19.9142C4.21071 19.5391 4 19.0304 4 18.5Z"
              stroke="#3A3A3A"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <path
              d="M12 10.5C13.6569 10.5 15 9.15685 15 7.5C15 5.84315 13.6569 4.5 12 4.5C10.3431 4.5 9 5.84315 9 7.5C9 9.15685 10.3431 10.5 12 10.5Z"
              stroke="#3A3A3A"
              strokeWidth="2.5"
            />
          </svg>
          <span>Profile</span>
        </StyledNavLink>
      </li>
    </ul>
  );
}

export default SidebarLinks;
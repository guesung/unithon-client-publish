import { Position } from "@/types/profile";
import Image from "next/image";
import { HTMLAttributes } from "react";
import styled from "styled-components";

type Size = "BIG" | "MEDIUM";

export default function Avatar({
  size = "BIG",
  profileImageUrl,
  position,
  uploadButton,
  ...props
}: {
  size: Size;
  profileImageUrl?: string;
  position?: Position;
  uploadButton?: boolean;
} & HTMLAttributes<HTMLDivElement>) {
  const isPositionDeveloper =
    position === "FRONT_END" || position === "BACK_END" || position === "ANDROID" || position === "IOS";

  return (
    <StyledAvatarWrapper size={size} {...props}>
      <StyledPositionIconWrapper>
        {profileImageUrl ? (
          <Image
            src={profileImageUrl}
            alt="profile image"
            width={size === "MEDIUM" ? 90 : 120}
            height={size === "MEDIUM" ? 90 : 120}
            style={{
              borderRadius: "6rem",
              objectFit: "cover",
            }}
          />
        ) : isPositionDeveloper ? (
          <DeveloperIcon size={size} />
        ) : position === "DESIGN" ? (
          <DesignerIcon size={size} />
        ) : (
          <ETCIcon size={size} />
        )}
      </StyledPositionIconWrapper>
      {uploadButton && (
        <StyledUploadIconWrapper>
          <UploadIcon />
        </StyledUploadIconWrapper>
      )}
    </StyledAvatarWrapper>
  );
}

const StyledAvatarWrapper = styled.div<{ size: Size }>`
  ${({ size }) => (size === "MEDIUM" ? `width: 9rem; height: 9rem;` : `width: 12rem; height: 12rem;`)}

  border-radius: 6rem;
`;

const StyledPositionIconWrapper = styled.div`
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
`;

const StyledUploadIconWrapper = styled.div`
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 1.3rem;
  border: 1px solid #4473f5;
  background-color: #fff;
  position: relative;
  top: -3.6rem;
  left: 9.4rem;
`;

function UploadIcon() {
  return (
    <StyledPlusIconWrapper>
      <PlusIcon />
    </StyledPlusIconWrapper>
  );
}

const StyledPlusIconWrapper = styled.div`
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
`;

function DeveloperIcon({ size }: { size: Size }) {
  const width = size === "MEDIUM" ? 90 : 120;
  const height = size === "MEDIUM" ? 90 : 120;

  return (
    <svg width={width} height={height} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="60" fill="#4473F5" />
      <path
        d="M39.8159 79.8472C39.7864 80.0074 39.9441 80.2958 40.0137 80.4312C40.4861 81.3499 40.891 82.2926 41.409 83.1891C41.8426 83.9396 42.1551 84.6782 42.7292 85.3441C43.3424 86.0554 43.8931 86.8282 44.5513 87.4998C47.3244 90.3291 51.1765 92.0974 55.0379 92.84C56.4896 93.1192 58.0569 93.1824 59.5173 92.962C60.0793 92.8772 60.6386 92.7618 61.1936 92.6385C61.8334 92.4963 62.4498 92.4404 63.0617 92.197C64.0009 91.8234 64.9826 91.5264 65.8695 91.0343C66.2888 90.8017 66.7147 90.5654 67.1361 90.3392C67.4476 90.1719 67.7737 89.9417 68.1249 89.8811"
        stroke="#2D2D2D"
        stroke-width="5.13832"
        stroke-linecap="round"
      />
      <circle cx="43" cy="52" r="18" fill="white" />
      <circle cx="43" cy="52" r="10" fill="#2D2D2D" />
      <circle cx="76" cy="52" r="18" fill="white" />
      <circle cx="76" cy="52" r="10" fill="#2D2D2D" />
    </svg>
  );
}

function DesignerIcon({ size }: { size: Size }) {
  const width = size === "MEDIUM" ? 90 : 120;
  const height = size === "MEDIUM" ? 90 : 120;

  return (
    <svg width={width} height={height} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="60" fill="#EA726F" />
      <rect x="29" y="32.31" width="4" height="11" rx="2" transform="rotate(-35.2746 29 32.31)" fill="#2D2D2D" />
      <rect
        x="23.4966"
        y="37.19"
        width="4"
        height="11"
        rx="2"
        transform="rotate(-45.2125 23.4966 37.19)"
        fill="#2D2D2D"
      />
      <rect
        width="4"
        height="11"
        rx="2"
        transform="matrix(-0.816394 -0.577496 -0.577496 0.816394 91.1146 32.31)"
        fill="#2D2D2D"
      />
      <rect
        width="4"
        height="11"
        rx="2"
        transform="matrix(-0.704479 -0.709725 -0.709725 0.704479 96.618 37.19)"
        fill="#2D2D2D"
      />
      <path
        d="M45 84C45.018 84.162 45.2522 84.3926 45.3579 84.5021C46.0752 85.2455 46.7348 86.0314 47.4893 86.7404C48.121 87.3339 48.6332 87.951 49.375 88.4231C50.1673 88.9272 50.9175 89.5083 51.7415 89.9615C55.2128 91.8707 59.4111 92.4529 63.3226 92.0502C64.7932 91.8988 66.3121 91.5073 67.6469 90.875C68.1605 90.6317 68.6628 90.3599 69.1587 90.0817C69.7302 89.7611 70.3043 89.5297 70.82 89.1202C71.6115 88.4916 72.4658 87.924 73.1731 87.1971C73.5075 86.8534 73.8472 86.5043 74.1854 86.1661C74.4354 85.9161 74.6813 85.6017 75 85.4423"
        stroke="#2D2D2D"
        stroke-width="5.13832"
        stroke-linecap="round"
      />
      <circle cx="43" cy="52" r="18" fill="white" />
      <circle cx="43" cy="52" r="10" fill="#2D2D2D" />
      <circle cx="76" cy="52" r="18" fill="white" />
      <circle cx="76" cy="52" r="10" fill="#2D2D2D" />
    </svg>
  );
}

function ETCIcon({ size }: { size: Size }) {
  const width = size === "MEDIUM" ? 90 : 120;
  const height = size === "MEDIUM" ? 90 : 120;

  return (
    <svg width={width} height={height} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="60" fill="#FAD554" />
      <circle cx="43" cy="52" r="18" fill="white" />
      <circle cx="43" cy="52" r="10" fill="#2D2D2D" />
      <circle cx="76" cy="52" r="18" fill="white" />
      <circle cx="76" cy="52" r="10" fill="#2D2D2D" />
      <path
        d="M72.5 84.0228C72.5 86.1898 71.0965 89.0648 68.7621 91.4198C66.4393 93.7631 63.2833 95.5 59.8937 95.5C56.5059 95.5 53.4043 93.7647 51.1355 91.4238C48.8561 89.0719 47.5 86.1957 47.5 84.0228C47.5 82.9623 47.8215 82.1888 48.3768 81.6008C48.9444 80.9997 49.794 80.5528 50.9143 80.2316C53.1681 79.5855 56.3188 79.5 59.8937 79.5C63.4677 79.5 66.6736 79.5853 68.9823 80.2324C70.1309 80.5544 71.008 81.0028 71.5952 81.6062C72.1688 82.1956 72.5 82.9675 72.5 84.0228Z"
        fill="#EA726F"
        stroke="#EA726F"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5.85365" width="2.92683" height="14" rx="1.46341" fill="#4473F5" />
      <rect
        x="0.487808"
        y="8.5"
        width="3"
        height="13.6585"
        rx="1.5"
        transform="rotate(-90 0.487808 8.5)"
        fill="#4473F5"
      />
    </svg>
  );
}

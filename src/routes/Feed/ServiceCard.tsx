import { CONFIG } from "site.config"
import React from "react"
import * as AiIcons from "react-icons/ai"
import * as MdIcons from "react-icons/md"
import * as FaIcons from "react-icons/fa"
import styled from "@emotion/styled"

const ServiceCard: React.FC = () => {
  if (!CONFIG.projects) return null
  return (
    <>
      <StyledTitle>
        Project
      </StyledTitle>
      <StyledWrapper>
        {CONFIG.projects.map((project, idx) => {
          const iconName = project.icon;
          const IconComponent =
            (AiIcons as any)[iconName] || (MdIcons as any)[iconName] || (FaIcons as any)[iconName];
          return (
            <a
              key={idx}
              href={`${project.href}`}
              rel="noreferrer"
              target="_blank"
            >
              {IconComponent && <IconComponent className="icon" />}
              <div className="name">{project.name}</div>
            </a>
          )
        })}
      </StyledWrapper>
    </>
  )
}

export default ServiceCard

const StyledTitle = styled.div`
  padding: 0.25rem;
  margin-bottom: 0.75rem;
`

const StyledWrapper = styled.div`
  display: flex;
  padding: 0.25rem;
  margin-bottom: 2.25rem;
  flex-direction: column;
  border-radius: 1rem;
  background-color: ${({ theme }) =>
    theme.scheme === "light" ? "white" : theme.colors.gray4};
  > a {
    display: flex;
    padding: 0.75rem;
    gap: 0.75rem;
    align-items: center;
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.gray11};
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.gray12};
      background-color: ${({ theme }) => theme.colors.gray5};
    }
    .icon {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    .name {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`

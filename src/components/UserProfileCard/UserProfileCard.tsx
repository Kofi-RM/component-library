import React from "react";
import { type UserProfileCardProps } from "../../types";

export default function UserProfileCard({
    user,
      showEmail,
      showRole,
      onEdit,
      children
}:UserProfileCardProps)  {

  return(
    <>
    <img src={user.avatarUrl}></img>
    <div>
      <h2>{user.name}</h2>
{showEmail && <h3>{user.email}</h3>}
{showRole && <h3>{user.role}</h3>}
      <button onClick={() => onEdit?.(user.id)}></button>
</div>

<div>{children}</div>
    </>
  )
}
import React from "react";

const ExploreIcon = ({ color }: any) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        style={{ fill: `var(--color-primary-${color})` }}
        d="M23.177.018a.803.803 0 0 0-.024.002h-8.068L7.543 7.562l8.866 8.867L24 8.839V.822a.803.803 0 0 0-.822-.804zM1.931.02a.803.803 0 0 0-.565 1.365l5.469 5.47L13.67.02zm14.893 2.326a.53.53 0 0 1 .377.158l.938.935a.535.535 0 0 1 0 .758l-.938.935a.533.533 0 0 1-.756 0l-.937-.935a.535.535 0 0 1 0-.758l.937-.935a.535.535 0 0 1 .38-.158zm-3.382 3.388c.137 0 .274.051.379.156l.935.938a.533.533 0 0 1 0 .756l-.935.937a.535.535 0 0 1-.758 0l-.936-.937a.533.533 0 0 1 0-.756l.936-.938a.533.533 0 0 1 .379-.156zm6.773.002a.535.535 0 0 1 .373.158l.93.93a.535.535 0 0 1 0 .761l-.93.93a.535.535 0 0 1-.762 0l-.93-.93a.535.535 0 0 1 0-.761l.93-.93a.535.535 0 0 1 .389-.158zM16.83 9.115a.53.53 0 0 1 .377.158l.938.935a.535.535 0 0 1 0 .758l-.938.937a.533.533 0 0 1-.756 0l-.937-.937a.535.535 0 0 1 0-.758l.937-.935a.535.535 0 0 1 .38-.158zm-11.015.722a.38.38 0 0 0-.27.112L.118 15.378a.38.38 0 0 0 0 .539l1.156 1.156a.378.378 0 0 0 .537 0l5.432-5.431a.379.379 0 0 0 0-.537L6.086 9.949a.38.38 0 0 0-.27-.112zM24 10.253l-6.883 6.883 5.473 5.47a.803.803 0 0 0 1.41-.562zM9.18 13.265a.382.382 0 0 0-.27.113L.112 22.175a.38.38 0 0 0 0 .539l1.156 1.156a.38.38 0 0 0 .54 0l8.796-8.799a.38.38 0 0 0 0-.539L9.45 13.378a.382.382 0 0 0-.27-.113zm3.365 3.348a.38.38 0 0 0-.27.11l-5.43 5.432a.379.379 0 0 0 0 .537L8 23.848a.38.38 0 0 0 .539 0l5.429-5.431a.379.379 0 0 0 0-.537l-1.156-1.156a.376.376 0 0 0-.268-.112z"
      />
    </svg>
  );
};

export default ExploreIcon;
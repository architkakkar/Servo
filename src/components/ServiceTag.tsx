"use client";

import React from "react";

interface ServiceTagProps {
  businessType: string;
}

function ServiceTag({ businessType }: ServiceTagProps) {
  return (
    <div className="rounded-full text-xs font-semibold absolute top-2 left-2 bg-black text-zinc-200 px-2 py-1">
      {businessType}
    </div>
  );
}

export default ServiceTag;

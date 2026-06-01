export default function MegaMenu({
  title1,
  items1,
  title2,
  items2,
  title3,
  items3,
  width = "min-w-[1050px]",
}) {
  const headingClass = `
    uppercase
    font-bold
    text-[#444]
    text-[14px]
    tracking-wide
    border-b
    border-gray-200
    pb-4
    mb-5
    transition-all
    duration-300
    hover:text-[#0B67C2]
  `;

  const menuItemClass = `
    relative
    px-4
    py-[10px]
    text-[#555]
    font-medium
    rounded-[4px]
    cursor-pointer
    transition-all
    duration-300
    hover:bg-[#f3f3f3]
    hover:text-[#0B67C2]

    before:absolute
    before:left-0
    before:top-1/2
    before:-translate-y-1/2
    before:w-0
    before:h-7
    before:bg-[#0B67C2]
    before:transition-all
    before:duration-300

    hover:before:w-[3px]
  `;

  const sections = [
    {
      title: title1,
      items: items1,
    },
    {
      title: title2,
      items: items2,
    },
  ];

  if (title3 && items3) {
    sections.push({
      title: title3,
      items: items3,
    });
  }

  return (
    <div
      className="
        absolute
        left-1/2
        -translate-x-1/2
        top-full
        pt-4
        opacity-0
        invisible
        translate-y-8
        group-hover:opacity-100
        group-hover:visible
        group-hover:translate-y-0
        transition-all
        duration-500
        ease-[cubic-bezier(0.23,1,0.32,1)]
        z-50
        mx-16
      "
    >
      <div
        className={`
          bg-white
          shadow-[0_15px_50px_rgba(0,0,0,0.12)]
          rounded-b-xl
          border-t-[3px]
          border-[#0B67C2]
          p-8
          ${width}
        `}
      >
        <div
          className={`grid ${
            sections.length === 3
              ? "grid-cols-3"
              : "grid-cols-2"
          } gap-12`}
        >
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className={headingClass}>
                {section.title}
              </h3>

              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className={menuItemClass}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
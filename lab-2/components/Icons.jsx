const Icons = () => {
  const socialIcons = [
    {
      icon: 'instagram',
      title: 'Instagram',
    },
    {
      icon: 'facebook-f',
      title: 'Facebook',
    },
    {
      icon: 'twitter',
      title: 'Twitter',
    },
    {
      icon: 'linkedin',
      title: 'LinkedIn',
    },
    {
      icon: 'youtube',
      title: 'YouTube',
    },
    {
      icon: 'github',
      title: 'Github',
    },
  ];

  return (
    <section>
      <div class="wrapper">
        {
          socialIcons.map(({ icon, title }) => (
            <Icon title={title} iconKey={icon} />
          ))
        }
      </div>
    </section>
  );
};
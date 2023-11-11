const bios = [
    {
      id: 1,
      name: "Sue",
      bio: "Aenean sit amet urna nec enim viverra rhoncus sit amet id tortor. Fusce sagittis purus volutpat augue ultricies, lacinia porttitor neque blandit. Proin ut scelerisque nisi. Vivamus mattis quis dui id feugiat. Aenean eu ipsum ligula. Nam dictum accumsan nisi. Sed venenatis tellus justo, ut auctor augue iaculis eget. Aenean lacinia eros id viverra volutpat. Etiam tristique, mi fringilla blandit accumsan, augue odio malesuada ipsum, commodo placerat ante ipsum id sem. Mauris non molestie dolor. Mauris fringilla ante a nisl eleifend, sit amet varius ipsum dapibus. Proin blandit odio eu justo interdum, vel hendrerit purus aliquet. Suspendisse ultrices, elit id molestie feugiat, tellus justo rhoncus neque, sit amet facilisis lacus leo a diam. In vel elit augue. Vestibulum nec commodo leo, in maximus tortor.",
    },
    {
      id: 2,
      name: "Sheila",
      bio: "Aenean sit amet urna nec enim viverra rhoncus sit amet id tortor. Fusce sagittis purus volutpat augue ultricies, lacinia porttitor neque blandit. Proin ut scelerisque nisi. Vivamus mattis quis dui id feugiat. Aenean eu ipsum ligula. Nam dictum accumsan nisi. Sed venenatis tellus justo, ut auctor augue iaculis eget. Aenean lacinia eros id viverra volutpat. Etiam tristique, mi fringilla blandit accumsan, augue odio malesuada ipsum, commodo placerat ante ipsum id sem. Mauris non molestie dolor. Mauris fringilla ante a nisl eleifend, sit amet varius ipsum dapibus. Proin blandit odio eu justo interdum, vel hendrerit purus aliquet. Suspendisse ultrices, elit id molestie feugiat, tellus justo rhoncus neque, sit amet facilisis lacus leo a diam. In vel elit augue. Vestibulum nec commodo leo, in maximus tortor.",
    },
    {
      id: 3,
      name: "Max",
      bio: "Aenean sit amet urna nec enim viverra rhoncus sit amet id tortor. Fusce sagittis purus volutpat augue ultricies, lacinia porttitor neque blandit. Proin ut scelerisque nisi. Vivamus mattis quis dui id feugiat. Aenean eu ipsum ligula. Nam dictum accumsan nisi. Sed venenatis tellus justo, ut auctor augue iaculis eget. Aenean lacinia eros id viverra volutpat. Etiam tristique, mi fringilla blandit accumsan, augue odio malesuada ipsum, commodo placerat ante ipsum id sem. Mauris non molestie dolor. Mauris fringilla ante a nisl eleifend, sit amet varius ipsum dapibus. Proin blandit odio eu justo interdum, vel hendrerit purus aliquet. Suspendisse ultrices, elit id molestie feugiat, tellus justo rhoncus neque, sit amet facilisis lacus leo a diam. In vel elit augue. Vestibulum nec commodo leo, in maximus tortor.",
    },
    {
      id: 4,
      name: "Lorna",
      bio: "Aenean sit amet urna nec enim viverra rhoncus sit amet id tortor. Fusce sagittis purus volutpat augue ultricies, lacinia porttitor neque blandit. Proin ut scelerisque nisi. Vivamus mattis quis dui id feugiat. Aenean eu ipsum ligula. Nam dictum accumsan nisi. Sed venenatis tellus justo, ut auctor augue iaculis eget. Aenean lacinia eros id viverra volutpat. Etiam tristique, mi fringilla blandit accumsan, augue odio malesuada ipsum, commodo placerat ante ipsum id sem. Mauris non molestie dolor. Mauris fringilla ante a nisl eleifend, sit amet varius ipsum dapibus. Proin blandit odio eu justo interdum, vel hendrerit purus aliquet. Suspendisse ultrices, elit id molestie feugiat, tellus justo rhoncus neque, sit amet facilisis lacus leo a diam. In vel elit augue. Vestibulum nec commodo leo, in maximus tortor.",
    },
    {
      id: 5,
      name: "Chad",
      bio: "Aenean sit amet urna nec enim viverra rhoncus sit amet id tortor. Fusce sagittis purus volutpat augue ultricies, lacinia porttitor neque blandit. Proin ut scelerisque nisi. Vivamus mattis quis dui id feugiat. Aenean eu ipsum ligula. Nam dictum accumsan nisi. Sed venenatis tellus justo, ut auctor augue iaculis eget. Aenean lacinia eros id viverra volutpat. Etiam tristique, mi fringilla blandit accumsan, augue odio malesuada ipsum, commodo placerat ante ipsum id sem. Mauris non molestie dolor. Mauris fringilla ante a nisl eleifend, sit amet varius ipsum dapibus. Proin blandit odio eu justo interdum, vel hendrerit purus aliquet. Suspendisse ultrices, elit id molestie feugiat, tellus justo rhoncus neque, sit amet facilisis lacus leo a diam. In vel elit augue. Vestibulum nec commodo leo, in maximus tortor.",
    },
    {
      id: 6,
      name: "Christie",
      bio: "Aenean sit amet urna nec enim viverra rhoncus sit amet id tortor. Fusce sagittis purus volutpat augue ultricies, lacinia porttitor neque blandit. Proin ut scelerisque nisi. Vivamus mattis quis dui id feugiat. Aenean eu ipsum ligula. Nam dictum accumsan nisi. Sed venenatis tellus justo, ut auctor augue iaculis eget. Aenean lacinia eros id viverra volutpat. Etiam tristique, mi fringilla blandit accumsan, augue odio malesuada ipsum, commodo placerat ante ipsum id sem. Mauris non molestie dolor. Mauris fringilla ante a nisl eleifend, sit amet varius ipsum dapibus. Proin blandit odio eu justo interdum, vel hendrerit purus aliquet. Suspendisse ultrices, elit id molestie feugiat, tellus justo rhoncus neque, sit amet facilisis lacus leo a diam. In vel elit augue. Vestibulum nec commodo leo, in maximus tortor.",
    },
    {
      id: 7,
      name: "Derrick",
      bio: "Aenean sit amet urna nec enim viverra rhoncus sit amet id tortor. Fusce sagittis purus volutpat augue ultricies, lacinia porttitor neque blandit. Proin ut scelerisque nisi. Vivamus mattis quis dui id feugiat. Aenean eu ipsum ligula. Nam dictum accumsan nisi. Sed venenatis tellus justo, ut auctor augue iaculis eget. Aenean lacinia eros id viverra volutpat. Etiam tristique, mi fringilla blandit accumsan, augue odio malesuada ipsum, commodo placerat ante ipsum id sem. Mauris non molestie dolor. Mauris fringilla ante a nisl eleifend, sit amet varius ipsum dapibus. Proin blandit odio eu justo interdum, vel hendrerit purus aliquet. Suspendisse ultrices, elit id molestie feugiat, tellus justo rhoncus neque, sit amet facilisis lacus leo a diam. In vel elit augue. Vestibulum nec commodo leo, in maximus tortor.",
    },
    {
      id: 8,
      name: "Doug",
      bio: "Aenean sit amet urna nec enim viverra rhoncus sit amet id tortor. Fusce sagittis purus volutpat augue ultricies, lacinia porttitor neque blandit. Proin ut scelerisque nisi. Vivamus mattis quis dui id feugiat. Aenean eu ipsum ligula. Nam dictum accumsan nisi. Sed venenatis tellus justo, ut auctor augue iaculis eget. Aenean lacinia eros id viverra volutpat. Etiam tristique, mi fringilla blandit accumsan, augue odio malesuada ipsum, commodo placerat ante ipsum id sem. Mauris non molestie dolor. Mauris fringilla ante a nisl eleifend, sit amet varius ipsum dapibus. Proin blandit odio eu justo interdum, vel hendrerit purus aliquet. Suspendisse ultrices, elit id molestie feugiat, tellus justo rhoncus neque, sit amet facilisis lacus leo a diam. In vel elit augue. Vestibulum nec commodo leo, in maximus tortor.",
    },
    {
      id: 9,
      name: "Lou",
      bio: "Aenean sit amet urna nec enim viverra rhoncus sit amet id tortor. Fusce sagittis purus volutpat augue ultricies, lacinia porttitor neque blandit. Proin ut scelerisque nisi. Vivamus mattis quis dui id feugiat. Aenean eu ipsum ligula. Nam dictum accumsan nisi. Sed venenatis tellus justo, ut auctor augue iaculis eget. Aenean lacinia eros id viverra volutpat. Etiam tristique, mi fringilla blandit accumsan, augue odio malesuada ipsum, commodo placerat ante ipsum id sem. Mauris non molestie dolor. Mauris fringilla ante a nisl eleifend, sit amet varius ipsum dapibus. Proin blandit odio eu justo interdum, vel hendrerit purus aliquet. Suspendisse ultrices, elit id molestie feugiat, tellus justo rhoncus neque, sit amet facilisis lacus leo a diam. In vel elit augue. Vestibulum nec commodo leo, in maximus tortor.",
    },
    {
      id: 10,
      name: "Caroline",
      bio: "Aenean sit amet urna nec enim viverra rhoncus sit amet id tortor. Fusce sagittis purus volutpat augue ultricies, lacinia porttitor neque blandit. Proin ut scelerisque nisi. Vivamus mattis quis dui id feugiat. Aenean eu ipsum ligula. Nam dictum accumsan nisi. Sed venenatis tellus justo, ut auctor augue iaculis eget. Aenean lacinia eros id viverra volutpat. Etiam tristique, mi fringilla blandit accumsan, augue odio malesuada ipsum, commodo placerat ante ipsum id sem. Mauris non molestie dolor. Mauris fringilla ante a nisl eleifend, sit amet varius ipsum dapibus. Proin blandit odio eu justo interdum, vel hendrerit purus aliquet. Suspendisse ultrices, elit id molestie feugiat, tellus justo rhoncus neque, sit amet facilisis lacus leo a diam. In vel elit augue. Vestibulum nec commodo leo, in maximus tortor.",
    },

  ];

  module.exports = bios;
  
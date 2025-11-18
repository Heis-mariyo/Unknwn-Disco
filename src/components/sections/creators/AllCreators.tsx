import React from "react";


// --- 3. DEFINE YOUR TYPE & DATA HERE ---
// Your updated data array with 'id' and 'bio'
const allCreators: Creator[] = [
  {
    id: 'alex-rivers',
    name: 'ALEX RIVERS',
    role: 'MUSIC PRODUCER',
    img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=60',
    category: 'MUSIC',
    desc: 'Producing chart-topping hits from the underground.',
    bio: 'Alex Rivers is a genre-bending music producer known for blending lo-fi beats with orchestral soundscapes. With over 10 million streams, Alex is a defining voice for the unseen generation of artists.',
  },
  {
    id: 'maya-chen',
    name: 'MAYA CHEN',
    role: 'VISUAL ARTIST',
    img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&auto=format&fit=crop&q=60',
    category: 'VISUAL',
    desc: 'Contemporary abstract painter exploring color theory.',
    bio: "Maya Chen's work explores the intersection of digital and physical realities. Her abstract paintings have been featured in galleries from Tokyo to New York, captivating audiences with their vibrant energy.",
  },
  {
    id: 'jordan-blake',
    name: 'JORDAN BLAKE',
    role: 'POET & WRITER',
    img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop&q=60',
    category: 'WRITING',
    desc: 'Weaving words that capture the soul of the city.',
    bio: "Jordan Blake's poetry speaks to the soul. Their latest collection, \"Echoes in the Static,\" sold over 50,000 copies, connecting with readers on a deeply personal level.",
  },
  {
    id: 'sam-torres',
    name: 'SAM TORRES',
    role: 'PERFORMANCE ARTIST',
    img: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=600&auto=format&fit=crop&q=60',
    category: 'PERFORMANCE',
    desc: 'Stage innovator blending dance and technology.',
    bio: 'Sam Torres transforms spaces with their immersive performance art. Each piece is a unique, unrepeatable experience that challenges perceptions and invites audience participation.',
  },
  {
    id: 'kai-anderson',
    name: 'KAI ANDERSON',
    role: 'DJ & PRODUCER',
    img: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&auto=format&fit=crop&q=60',
    category: 'MUSIC',
    desc: 'Live sets that define the rhythm of the night.',
    bio: "From underground clubs to massive festivals, Kai's infectious energy and seamless mixes create an unforgettable atmosphere. A true master of the craft.",
  },
  {
    id: 'zara-malik',
    name: 'ZARA MALIK',
    role: 'MIXED MEDIA ARTIST',
    img: '/zara-malik.jpg',
    category: 'VISUAL',
    desc: 'Using discarded materials to create stunning visuals.',
    bio: 'Zara Malik challenges consumerism by transforming discarded materials into breathtaking sculptures. Her work is a powerful statement on sustainability and beauty.',
  },
  {
    id: 'river-stone',
    name: 'RIVER STONE',
    role: 'NOVELIST',
    img: '/river-stone.png',
    category: 'WRITING',
    desc: 'Crafting narratives that transcend reality.',
    bio: 'River Stone is the bestselling author of the "Cinder" trilogy. Their world-building and complex characters have earned them a dedicated global following.',
  },
  {
    id: 'phoenix-ray',
    name: 'PHOENIX RAY',
    role: 'DANCER & CHOREOGRAPHER',
    img: '/phoenix-ray.png',
    category: 'PERFORMANCE',
    desc: 'Movement that speaks louder than words.',
    bio: "Phoenix Ray's choreography has been featured in music videos and stage productions worldwide. Their unique style combines classical forms with modern street dance.",
  },
];

// By exporting this type, our CreatorModal.tsx can import it
export type Creator = {
  id: string;
  name: string;
  role: string;
  img: string;
  category: string;
  desc: string;
  bio: string; // The new field for the modal
};

export default allCreators;
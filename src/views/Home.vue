<template>
  <div class="home">
    <Carousel />
    <FeatureContent />
    <GetLocation />
    <Certifications />
    <Agreements />
    <NewsLetter />
  </div>
</template>

<script>
import Carousel from "@/components/Carousel"
import FeatureContent from "@/components/FeatureContent"
import GetLocation from "@/components/GetLocation"
import Certifications from "@/components/Certifications"
import Agreements from "@/components/Agreements"
import NewsLetter from "@/components/NewsLetter"

export default {
  name: 'Home',
  components: {
    Carousel,
    FeatureContent,
    GetLocation,
    Certifications,
    Agreements,
    NewsLetter
  },
}
</script>
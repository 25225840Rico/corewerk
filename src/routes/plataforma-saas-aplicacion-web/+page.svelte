<script lang="ts">
  import SegmentPage from '$lib/components/SegmentPage.svelte';
  import { getSegment } from '$lib/content/segments';
  const data = getSegment('plataforma-saas-aplicacion-web')!;
</script>
<SegmentPage {data} />

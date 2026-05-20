/**
 * WordPress REST API Service
 * Handles all communication with WordPress backend
 */

export interface WPPost {
  id: number;
  date: string;
  date_gmt: string;
  guid: { rendered: string };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  author: number;
  featured_media: number;
  parent: number;
  menu_order: number;
  comment_status: string;
  ping_status: string;
  template: string;
  format: string;
  meta: any;
  categories: number[];
  tags: number[];
  _embedded?: {
    author?: Array<{ id: number; name: string }>;
    'wp:featuredmedia'?: Array<{ id: number; source_url: string }>;
    'wp:term'?: any[][];
  };
}

const getApiBase = (): string => {
  // Get WordPress base URL from window context
  const wpData = (window as any).wpData;
  if (wpData?.root) {
    return wpData.root;
  }
  return '/wp-json';
};

/**
 * Fetch data from WordPress REST API
 * @param endpoint - API endpoint (e.g., 'posts', 'posts/123', 'portfolio')
 * @param params - Query parameters
 * @returns Promise with data or error
 */
export async function fetchFromWP(
  endpoint: string,
  params: Record<string, string | number | boolean> = {}
): Promise<any> {
  try {
    const apiBase = getApiBase();
    
    // Build query string
    const defaultParams = {
      _embed: true,
      per_page: 10,
    };

    const queryParams = new URLSearchParams();
    Object.entries({ ...defaultParams, ...params }).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        queryParams.append(key, String(value));
      }
    });

    const url = `${apiBase}/wp/v2/${endpoint}?${queryParams.toString()}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('WordPress API Error:', error);
    return null;
  }
}

/**
 * Create a new post
 */
export async function createWPPost(
  postData: Partial<WPPost>,
  postType: string = 'posts'
): Promise<WPPost | null> {
  try {
    const apiBase = getApiBase();
    const nonce = (window as any).wpData?.nonce;

    const response = await fetch(`${apiBase}/wp/v2/${postType}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-WP-Nonce': nonce,
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('WordPress API Error:', error);
    return null;
  }
}

/**
 * Update an existing post
 */
export async function updateWPPost(
  postId: number,
  postData: Partial<WPPost>,
  postType: string = 'posts'
): Promise<WPPost | null> {
  try {
    const apiBase = getApiBase();
    const nonce = (window as any).wpData?.nonce;

    const response = await fetch(`${apiBase}/wp/v2/${postType}/${postId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-WP-Nonce': nonce,
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('WordPress API Error:', error);
    return null;
  }
}

/**
 * Delete a post
 */
export async function deleteWPPost(
  postId: number,
  postType: string = 'posts'
): Promise<boolean> {
  try {
    const apiBase = getApiBase();
    const nonce = (window as any).wpData?.nonce;

    const response = await fetch(`${apiBase}/wp/v2/${postType}/${postId}`, {
      method: 'DELETE',
      headers: {
        'X-WP-Nonce': nonce,
      },
    });

    return response.ok;
  } catch (error) {
    console.error('WordPress API Error:', error);
    return false;
  }
}

export default { fetchFromWP, createWPPost, updateWPPost, deleteWPPost };

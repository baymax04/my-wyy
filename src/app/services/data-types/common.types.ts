// 轮播图数据类型
export interface Banner {
    targetId: number;
    url: string;
    imageUrl: string;
}

// 定义热门标签的数据类型
export interface HotTag {
    id: number;
    name: string;
    position: number;  // 显示的顺序。position越小，显示在越前面
}

// 歌手
export interface Singer {
    id: number;
    name: string;
    picUrl: string;
    albumSize: number;
}

// 歌曲
export interface Song {
    id: number;
    name: string;
    url: string;
    ar: Singer[];
    al: { id: number; name: string; picUrl: string };
    dt: number;
}

// 定义热门歌单
export interface SongSheet {
    id: number;
    name: string;
    picUrl: string;
    playCount: number;
    tracks: Song[];
}

// 歌曲地址的数据类型
export interface SongUrl {
    id: number;
    url: string;
}

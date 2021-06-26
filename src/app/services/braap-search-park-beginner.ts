export interface BraapSearchParkBeginner {
    message?: any;
    success: boolean;
    data: Datum[];
  }
  
  export interface Datum {
    Id: number;
    LastUpdated: string;
    Status: number;
    Name: string;
    Desc: string;
    AltName: string;
    LandType?: any;
    LastKnownStatus: boolean;
    ApproximateSize?: any;
    Lat: string;
    Lng: string;
    permittedVehicles: PermittedVehicles;
    terrain: Terrain;
    experienceLevel: ExperienceLevel;
  }
  
  interface ExperienceLevel {
    Id: number;
    LastUpdated: string;
    ParkId: number;
    TrailId?: any;
    Overall?: any;
    Beginner: number;
    Intermediate: number;
    Advanced: number;
    Expert: number;
  }
  
  interface Terrain {
    Id: number;
    LastUpdated: string;
    ParkId: number;
    TrailId?: any;
    SpeedRating?: any;
    Jumps?: number;
    RhythmSection?: number;
    HardPack?: number;
    Mud?: number;
    Roots?: number;
    Gravle?: number;
    LargeLooseRocks?: number;
    HillClimb?: number;
    OtherHazards: number;
    Sand?: number;
  }
  
  interface PermittedVehicles {
    Id: number;
    Motorcycle: boolean;
    ATV: boolean;
    SxS: boolean;
    Jeep: boolean;
    Snowmobile?: boolean;
  }
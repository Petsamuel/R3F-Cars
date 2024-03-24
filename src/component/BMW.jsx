
import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { useAppContext } from "../context/context";

export const BMW = (props) => {
  const { state, setState } = useAppContext()
  const CarHeadLight = useRef()
  const CarHeadLight2 = useRef()
  const CarHeadLight3 = useRef()
  const CarWheel = useRef()
  const CarWheel2 = useRef()
  const CarWheel3 = useRef()


  // useFrame(() => {
  //   CarWheel2.current.rotation.x += 0.01
  // })


  const { nodes, materials } = useGLTF('./bmw/scene.gltf')
  return (
    <group {...props} dispose={null} >
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_buckedseat_R_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_buckedseat_R_ARm4_common_carbon_0.geometry} material={materials.ARm4_common_carbon} />
          <mesh geometry={nodes.ARm4_buckedseat_R_ARm4_common_chrome_0.geometry} material={materials.ARm4_common_chrome} />
          <mesh geometry={nodes.ARm4_buckedseat_R_ARm4_color_interior_0.geometry} material={materials.ARm4_color_interior} />
          <mesh geometry={nodes.ARm4_buckedseat_R_ARm4_INTER_tcz_0.geometry} material={materials.ARm4_INTER_tcz} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_buckedseat_L_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_buckedseat_L_ARm4_common_carbon_0.geometry} material={materials.ARm4_common_carbon} />
          <mesh geometry={nodes.ARm4_buckedseat_L_ARm4_common_chrome_0.geometry} material={materials.ARm4_common_chrome} />
          <mesh geometry={nodes.ARm4_buckedseat_L_ARm4_color_interior_0.geometry} material={materials.ARm4_color_interior} />
          <mesh geometry={nodes.ARm4_buckedseat_L_ARm4_INTER_tcz_0.geometry} material={materials.ARm4_INTER_tcz} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_interior_mirror_forged_ARm4_forged_carbon_0.geometry} material={materials.ARm4_forged_carbon} />
          <mesh geometry={nodes.ARm4_interior_mirror_forged_mirror_0.geometry} material={materials.mirror} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_rear_diffuser_stock_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_rear_diffuser_stock_ARm4_common_chrome_0.geometry} material={materials.ARm4_common_chrome} />
        </group>
        <group position={[0, 0, -0.153]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_grille_carbon001_ARm4_Details_D_0.geometry} material={materials.ARm4_Details_D} />
          <mesh geometry={nodes.ARm4_grille_carbon001_ARm4_forged_carbon_0.geometry} material={materials.ARm4_forged_carbon} />
          <mesh geometry={nodes.ARm4_grille_carbon001_ARm4_common_metal_0.geometry} material={materials.ARm4_common_metal} />
        </group>
        <group position={[0, 0.616, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_mirror_L_carbon_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_mirror_L_carbon_ARm4_common_carbon_0.geometry} material={materials.ARm4_common_carbon} />
          <mesh geometry={nodes.ARm4_mirror_L_carbon_mirror_0.geometry} material={materials.mirror} />
          <mesh geometry={nodes.ARm4_mirror_L_carbon_ARm4_signal_L_0.geometry} material={materials.ARm4_signal_L} />
        </group>
        <group position={[0, 0.616, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_mirror_R_carbon_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_mirror_R_carbon_ARm4_common_carbon_0.geometry} material={materials.ARm4_common_carbon} />
          <mesh geometry={nodes.ARm4_mirror_R_carbon_mirror_0.geometry} material={materials.mirror} />
          <mesh geometry={nodes.ARm4_mirror_R_carbon_ARm4_signal_R_0.geometry} material={materials.ARm4_signal_R} />
        </group>
        <group position={[36.114, 93.38, 14.278]} rotation={[-1.134, 0, 0]} scale={[100, 99.966, 99.842]}>
          <mesh geometry={nodes.ARm4_steer_stick_msport_ARm4_int_seams_0.geometry} material={materials.ARm4_int_seams} />
          <mesh geometry={nodes.ARm4_steer_stick_msport_common_transparent_0.geometry} material={materials.common_transparent} />
        </group>
        <group position={[36.114, 93.337, 14.33]} rotation={[-1.134, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_steer_carbon_ARm4_common_black003_0.geometry} material={materials['ARm4_common_black.003']} />
          <mesh geometry={nodes.ARm4_steer_carbon_ARm4_common_carbon_0.geometry} material={materials.ARm4_common_carbon} />
          <mesh geometry={nodes.ARm4_steer_carbon_ARm4_common_bmw_logo_0.geometry} material={materials.ARm4_common_bmw_logo} />
          <mesh geometry={nodes.ARm4_steer_carbon_ARm4_common_chrome_0.geometry} material={materials.ARm4_common_chrome} />
          <mesh geometry={nodes.ARm4_steer_carbon_ARm4_common_metal_0.geometry} material={materials.ARm4_common_metal} />
          <mesh geometry={nodes.ARm4_steer_carbon_ARm4_interior_symbols_0.geometry} material={materials.ARm4_interior_symbols} />
          <mesh geometry={nodes.ARm4_steer_carbon_ARm4_INT_Decals_0.geometry} material={materials.ARm4_INT_Decals} />
          <mesh geometry={nodes.ARm4_steer_carbon_common_transparent_0.geometry} material={materials.common_transparent} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_interior_mirror_carbon_ARm4_common_carbon_0.geometry} material={materials.ARm4_common_carbon} />
          <mesh geometry={nodes.ARm4_interior_mirror_carbon_mirror_0.geometry} material={materials.mirror} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_interior_mirror_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_interior_mirror_mirror_0.geometry} material={materials.mirror} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_interior_trim_black_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_interior_trim_black_ARm4_INT_Decals_0.geometry} material={materials.ARm4_INT_Decals} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_m4_badge_black_ARm4_Details_D_0.geometry} material={materials.ARm4_Details_D} />
          <mesh geometry={nodes.ARm4_m4_badge_black_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
        </group>
        {/* head lamp1 */}
        <group position={[0, 0, -0.267]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_headlight_R_black_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_headlight_R_black_ARm4_lowbeam_0.geometry} material={materials.ARm4_lowbeam} />
          <mesh geometry={nodes.ARm4_headlight_R_black_ARm4_Light_D_0.geometry} material={materials.ARm4_Light_D} />
          <mesh geometry={nodes.ARm4_headlight_R_black_hedlight_o_0.geometry} material={materials.hedlight_o} />
          <mesh geometry={nodes.ARm4_headlight_R_black_ARm4_highbeam_0.geometry} material={materials.ARm4_highbeam} />
          <mesh geometry={nodes.ARm4_headlight_R_black_ARm4_tailsignal_L_0.geometry} material={materials.ARm4_tailsignal_L} />
          <mesh geometry={nodes.ARm4_headlight_R_black_ARm4_headsignal_L_0.geometry} material={materials.ARm4_headsignal_L} />
          <mesh geometry={nodes.ARm4_headlight_R_black_ARm4_glass_0.geometry} material={materials.ARm4_glass} />
          <mesh geometry={nodes.ARm4_headlight_R_black_ARm4_runninglight_0.geometry} material={materials.ARm4_runninglight} />
        </group>
        {/* headlamp2 */}
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_headlight_L_black_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_headlight_L_black_ARm4_lowbeam_0.geometry} material={materials.ARm4_lowbeam} />
          <mesh geometry={nodes.ARm4_headlight_L_black_ARm4_Light_D_0.geometry} material={materials.ARm4_Light_D} />
          <mesh geometry={nodes.ARm4_headlight_L_black_hedlight_o_0.geometry} material={materials.hedlight_o} />
          <mesh geometry={nodes.ARm4_headlight_L_black_ARm4_highbeam_0.geometry} material={materials.ARm4_highbeam} />
          <mesh geometry={nodes.ARm4_headlight_L_black_ARm4_tailsignal_L_0.geometry} material={materials.ARm4_tailsignal_L} />
          <mesh geometry={nodes.ARm4_headlight_L_black_ARm4_headsignal_L_0.geometry} material={materials.ARm4_headsignal_L} />
          <mesh geometry={nodes.ARm4_headlight_L_black_ARm4_glass_0.geometry} material={materials.ARm4_glass} />
          <mesh geometry={nodes.ARm4_headlight_L_black_ARm4_runninglight_0.geometry} material={materials.ARm4_runninglight} />
        </group>
        <group position={[74.986, 37.323, 130.31]} ref={CarWheel} rotation={[-Math.PI / 2, 0, 0]} scale={106.747}>
          <mesh geometry={nodes.ARm4_vt_wheel_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_vt_wheel_ARm4_main_0.geometry} material={materials.ARm4_main} />
          <mesh geometry={nodes.ARm4_vt_wheel_michelin_diff_0.geometry} material={materials.michelin_diff} />
          <mesh geometry={nodes.ARm4_vt_wheel_ARm4_V_logo_0.geometry} material={materials.ARm4_V_logo} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.ARm4_exhaust_L_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_exhaust_L_etkc_0.geometry} material={materials.etkc} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_trunk_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_trunk_ARm4_lowbeam_0.geometry} material={materials.ARm4_lowbeam} />
          <mesh geometry={nodes.ARm4_trunk_ARm4_main_0.geometry} material={materials.ARm4_main} />
          <mesh geometry={nodes.ARm4_trunk_ARm4_alcnt_0.geometry} material={materials.ARm4_alcnt} />
        </group>
        <group position={[61.368, 85.159, 33.235]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_interior_headlight_ARm4_common_metal_0.geometry} material={materials.ARm4_common_metal} />
          <mesh geometry={nodes.ARm4_interior_headlight_ARm4_interior_symbols_0.geometry} material={materials.ARm4_interior_symbols} />
          <mesh geometry={nodes.ARm4_interior_headlight_ARm4_INT_Decals_0.geometry} material={materials.ARm4_INT_Decals} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_seats_R_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_seats_R_ARm4_common_chrome_0.geometry} material={materials.ARm4_common_chrome} />
          <mesh geometry={nodes.ARm4_seats_R_ARm4_color_interior_0.geometry} material={materials.ARm4_color_interior} />
          <mesh geometry={nodes.ARm4_seats_R_ARm4_INT_Decals_0.geometry} material={materials.ARm4_INT_Decals} />
          <mesh geometry={nodes.ARm4_seats_R_ARm4_int_seams_0.geometry} material={materials.ARm4_int_seams} />
          <mesh geometry={nodes.ARm4_seats_R_ARm4_INT_Belt_0.geometry} material={materials.ARm4_INT_Belt} />
          <mesh geometry={nodes.ARm4_seats_R_ARm4_INTER_tcz_0.geometry} material={materials.ARm4_INTER_tcz} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_canards_carbon_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_canards_carbon_ARm4_common_carbon_0.geometry} material={materials.ARm4_common_carbon} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_engine_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_engine_ARm4_common_chrome_0.geometry} material={materials.ARm4_common_chrome} />
          <mesh geometry={nodes.ARm4_engine_ARm4_common_engine_0.geometry} material={materials.ARm4_common_engine} />
          <mesh geometry={nodes.ARm4_engine_ARm4_gray3_0.geometry} material={materials.ARm4_gray3} />
          <mesh geometry={nodes.ARm4_engine_ARm4_Mpower_en_0.geometry} material={materials.ARm4_Mpower_en} />
        </group>
        <group position={[45.04, 88.717, 27.548]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_signalstalk_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_signalstalk_ARm4_interior_symbols_0.geometry} material={materials.ARm4_interior_symbols} />
        </group>
        <group position={[45.662, 59.259, 74.331]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_brakepedal_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_brakepedal_ARm4_INT_Decals_0.geometry} material={materials.ARm4_INT_Decals} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_fender_trim_R_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_fender_trim_R_ARm4_common_chrome_0.geometry} material={materials.ARm4_common_chrome} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_enginebay_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_enginebay_ARm4_common_carbon_0.geometry} material={materials.ARm4_common_carbon} />
          <mesh geometry={nodes.ARm4_enginebay_ARm4_main_0.geometry} material={materials.ARm4_main} />
          <mesh geometry={nodes.ARm4_enginebay_ARm4_common_engine_0.geometry} material={materials.ARm4_common_engine} />
          <mesh geometry={nodes.ARm4_enginebay_ARm4_gray3_0.geometry} material={materials.ARm4_gray3} />
          <mesh geometry={nodes.ARm4_enginebay_ARm4_mechanicals_d_0.geometry} material={materials.ARm4_mechanicals_d} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_dender_trim_L_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_dender_trim_L_ARm4_common_chrome_0.geometry} material={materials.ARm4_common_chrome} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_door_L_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_door_L_ARm4_main_0.geometry} material={materials.ARm4_main} />
          <mesh geometry={nodes.ARm4_door_L_ARm4_common_metal_0.geometry} material={materials.ARm4_common_metal} />
          <mesh geometry={nodes.ARm4_door_L_etkc_0.geometry} material={materials.etkc} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_fender_R_ARm4_Details_D_0.geometry} material={materials.ARm4_Details_D} />
          <mesh geometry={nodes.ARm4_fender_R_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_fender_R_ARm4_main_0.geometry} material={materials.ARm4_main} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_fender_L_ARm4_Details_D_0.geometry} material={materials.ARm4_Details_D} />
          <mesh geometry={nodes.ARm4_fender_L_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_fender_L_ARm4_main_0.geometry} material={materials.ARm4_main} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_interior_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_interior_ARm4_common_carbon_0.geometry} material={materials.ARm4_common_carbon} />
          <mesh geometry={nodes.ARm4_interior_ARm4_main_0.geometry} material={materials.ARm4_main} />
          <mesh geometry={nodes.ARm4_interior_ARm4_common_chrome_0.geometry} material={materials.ARm4_common_chrome} />
          <mesh geometry={nodes.ARm4_interior_ARm4_common_metal_0.geometry} material={materials.ARm4_common_metal} />
          <mesh geometry={nodes.ARm4_interior_ARm4_interior_symbols_0.geometry} material={materials.ARm4_interior_symbols} />
          <mesh geometry={nodes.ARm4_interior_ARm4_color_interior_0.geometry} material={materials.ARm4_color_interior} />
          <mesh geometry={nodes.ARm4_interior_ARm4_grill_2_0.geometry} material={materials.ARm4_grill_2} />
          <mesh geometry={nodes.ARm4_interior_ARm4_INT_Decals_0.geometry} material={materials.ARm4_INT_Decals} />
          <mesh geometry={nodes.ARm4_interior_ARm4_int_seams_0.geometry} material={materials.ARm4_int_seams} />
          <mesh geometry={nodes.ARm4_interior_ARm4_alcnt_0.geometry} material={materials.ARm4_alcnt} />
          <mesh geometry={nodes.ARm4_interior_ARm4_INT_Belt_0.geometry} material={materials.ARm4_INT_Belt} />
          <mesh geometry={nodes.ARm4_interior_ARm4_INT_speakers_0.geometry} material={materials.ARm4_INT_speakers} />
          <mesh geometry={nodes.ARm4_interior_ARm4_common_alum_0.geometry} material={materials.ARm4_common_alum} />
          <mesh geometry={nodes.ARm4_interior_ARm4_int_decals_pad_0.geometry} material={materials.ARm4_int_decals_pad} />
          <mesh geometry={nodes.ARm4_interior_BMW_M4Coupe_2014_Badge_DiffuseAOSO_0.geometry} material={materials.BMW_M4Coupe_2014_Badge_DiffuseAOSO} />
          <mesh geometry={nodes.ARm4_interior_ARm4_wr_reset_badge_0.geometry} material={materials.ARm4_wr_reset_badge} />
          <mesh geometry={nodes.ARm4_interior_ARm4_wr_reset_badge_1_0.geometry} material={materials.ARm4_wr_reset_badge_1} />
          <mesh geometry={nodes.ARm4_interior_etkc_screen_0.geometry} material={materials.etkc_screen} />
          <mesh geometry={nodes.ARm4_interior_ARm4_interior_black_0.geometry} material={materials.ARm4_interior_black} />
          <mesh geometry={nodes.ARm4_interior_ARm4_interior_hazard_0.geometry} material={materials.ARm4_interior_hazard} />
          <mesh geometry={nodes.ARm4_interior_ARm4_crystal_interior_0.geometry} material={materials.ARm4_crystal_interior} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_body_ARm4_Details_D_0.geometry} material={materials.ARm4_Details_D} />
          <mesh geometry={nodes.ARm4_body_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_body_ARm4_main_0.geometry} material={materials.ARm4_main} />
          <mesh geometry={nodes.ARm4_body_ARm4_INT_Decals_0.geometry} material={materials.ARm4_INT_Decals} />
          <mesh geometry={nodes.ARm4_body_ARm4_chmsl_0.geometry} material={materials.ARm4_chmsl} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_doorpanel_R_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_doorpanel_R_ARm4_common_metal_0.geometry} material={materials.ARm4_common_metal} />
          <mesh geometry={nodes.ARm4_doorpanel_R_ARm4_interior_symbols_0.geometry} material={materials.ARm4_interior_symbols} />
          <mesh geometry={nodes.ARm4_doorpanel_R_ARm4_color_interior_0.geometry} material={materials.ARm4_color_interior} />
          <mesh geometry={nodes.ARm4_doorpanel_R_ARm4_INT_Decals_0.geometry} material={materials.ARm4_INT_Decals} />
          <mesh geometry={nodes.ARm4_doorpanel_R_ARm4_int_seams_0.geometry} material={materials.ARm4_int_seams} />
          <mesh geometry={nodes.ARm4_doorpanel_R_ARm4_INT_speakers_0.geometry} material={materials.ARm4_INT_speakers} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_door_R_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_door_R_ARm4_main_0.geometry} material={materials.ARm4_main} />
          <mesh geometry={nodes.ARm4_door_R_ARm4_common_metal_0.geometry} material={materials.ARm4_common_metal} />
          <mesh geometry={nodes.ARm4_door_R_etkc_0.geometry} material={materials.etkc} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_doorpanel_L_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_doorpanel_L_ARm4_common_metal_0.geometry} material={materials.ARm4_common_metal} />
          <mesh geometry={nodes.ARm4_doorpanel_L_ARm4_interior_symbols_0.geometry} material={materials.ARm4_interior_symbols} />
          <mesh geometry={nodes.ARm4_doorpanel_L_ARm4_color_interior_0.geometry} material={materials.ARm4_color_interior} />
          <mesh geometry={nodes.ARm4_doorpanel_L_ARm4_INT_Decals_0.geometry} material={materials.ARm4_INT_Decals} />
          <mesh geometry={nodes.ARm4_doorpanel_L_ARm4_int_seams_0.geometry} material={materials.ARm4_int_seams} />
          <mesh geometry={nodes.ARm4_doorpanel_L_ARm4_INT_speakers_0.geometry} material={materials.ARm4_INT_speakers} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_bumper_F_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_bumper_F_ARm4_main_0.geometry} material={materials.ARm4_main} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_bumper_R_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_bumper_R_ARm4_Light_D_0.geometry} material={materials.ARm4_Light_D} />
          <mesh geometry={nodes.ARm4_bumper_R_ARm4_main_0.geometry} material={materials.ARm4_main} />
          <mesh geometry={nodes.ARm4_bumper_R_ARm4_Metal_D_0.geometry} material={materials.ARm4_Metal_D} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_hood_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_hood_ARm4_main_0.geometry} material={materials.ARm4_main} />
          <mesh geometry={nodes.ARm4_hood_ARm4_common_chrome_0.geometry} material={materials.ARm4_common_chrome} />
          <mesh geometry={nodes.ARm4_hood_ARm4_common_engine_0.geometry} material={materials.ARm4_common_engine} />
        </group>
        <group position={[0, 0, -0.094]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_trunklight_snake001_ARm4_common_black001_0.geometry} material={materials['ARm4_common_black.001']} />
          <mesh geometry={nodes.ARm4_trunklight_snake001_ARm4_taillight_alt001_0.geometry} material={materials['ARm4_taillight_alt.001']} />
          <mesh geometry={nodes.ARm4_trunklight_snake001_ARm4_headsignal_L_alt001_0.geometry} material={materials['ARm4_headsignal_L_alt.001']} />
          <mesh geometry={nodes.ARm4_trunklight_snake001_ARm4_rev001_0.geometry} material={materials['ARm4_rev.001']} />
        </group>
        <group position={[0, 0, -0.094]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_taillight_R_snake001_ARm4_common_black001_0.geometry} material={materials['ARm4_common_black.001']} />
          <mesh geometry={nodes.ARm4_taillight_R_snake001_ARm4_taillight_alt001_0.geometry} material={materials['ARm4_taillight_alt.001']} />
          <mesh geometry={nodes.ARm4_taillight_R_snake001_ARm4_headsignal_L_alt001_0.geometry} material={materials['ARm4_headsignal_L_alt.001']} />
        </group>
        <group position={[0, 0, -0.094]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_taillight_L_snake001_ARm4_common_black001_0.geometry} material={materials['ARm4_common_black.001']} />
          <mesh geometry={nodes.ARm4_taillight_L_snake001_ARm4_taillight_alt001_0.geometry} material={materials['ARm4_taillight_alt.001']} />
          <mesh geometry={nodes.ARm4_taillight_L_snake001_ARm4_headsignal_L_alt001_0.geometry} material={materials['ARm4_headsignal_L_alt.001']} />
        </group>
        <group position={[0, 0, 0.109]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_R_logo_M_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_R_logo_M_ARm4_m_bmw_logo_0.geometry} material={materials.ARm4_m_bmw_logo} />
        </group>
        <group position={[0, 0.013, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ARm4_F_logo_M_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_F_logo_M_ARm4_m_bmw_logo_0.geometry} material={materials.ARm4_m_bmw_logo} />
        </group>
        <group position={[75.519, 37.323, 130.31]} rotation={[Math.PI / 2, -0.035, Math.PI]} scale={105.483}>
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_brake002_0.geometry} material={materials['amdb11_brake.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_misc_chrome002_0.geometry} material={materials['amdb11_misc_chrome.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_misc002_0.geometry} material={materials['amdb11_misc.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR003_amdb11_caliper002_0.geometry} material={materials['amdb11_caliper.002']} />
        </group>
        {/* backwheel right */}
        <group position={[74.986, 37.323, -150.797]} rotation={[-Math.PI / 2, 0, 0]} scale={106.747}>
          <mesh geometry={nodes.ARm4_vt_wheel001_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_vt_wheel001_ARm4_main_0.geometry} material={materials.ARm4_main} />
          <mesh geometry={nodes.ARm4_vt_wheel001_michelin_diff_0.geometry} material={materials.michelin_diff} />
          <mesh geometry={nodes.ARm4_vt_wheel001_ARm4_V_logo_0.geometry} material={materials.ARm4_V_logo} />
        </group>
        <group position={[75.519, 37.323, -150.797]} rotation={[Math.PI / 2, -0.035, Math.PI]} scale={105.483}>
          <mesh geometry={nodes.amdb11_brakedisc_FR001_amdb11_brake002_0.geometry} material={materials['amdb11_brake.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR001_amdb11_misc_chrome002_0.geometry} material={materials['amdb11_misc_chrome.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR001_amdb11_misc002_0.geometry} material={materials['amdb11_misc.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR001_amdb11_caliper002_0.geometry} material={materials['amdb11_caliper.002']} />
        </group>
        {/* front wheer left */}
        <group position={[-74.727, 37.323, 130.31]} rotation={[-Math.PI / 2, 0, 0]} scale={[-106.747, 106.747, 106.747]}>
          <mesh geometry={nodes.ARm4_vt_wheel002_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_vt_wheel002_ARm4_main_0.geometry} material={materials.ARm4_main} />
          <mesh geometry={nodes.ARm4_vt_wheel002_michelin_diff_0.geometry} material={materials.michelin_diff} />
          <mesh geometry={nodes.ARm4_vt_wheel002_ARm4_V_logo_0.geometry} material={materials.ARm4_V_logo} />
        </group>
        <group ref={CarWheel2} position={[-75.261, 37.323, 130.31]} rotation={[Math.PI / 2, 0.035, -Math.PI]} scale={[-105.483, 105.483, 105.483]}>
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_brake002_0.geometry} material={materials['amdb11_brake.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_misc_chrome002_0.geometry} material={materials['amdb11_misc_chrome.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_misc002_0.geometry} material={materials['amdb11_misc.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR002_amdb11_caliper002_0.geometry} material={materials['amdb11_caliper.002']} />
        </group>
        {/*  backright wheel*/}
        <group position={[-74.727, 37.323, -150.797]} rotation={[-Math.PI / 2, 0, 0]} scale={[-106.747, 106.747, 106.747]}>
          <mesh geometry={nodes.ARm4_vt_wheel003_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} />
          <mesh geometry={nodes.ARm4_vt_wheel003_ARm4_main_0.geometry} material={materials.ARm4_main} />
          <mesh geometry={nodes.ARm4_vt_wheel003_michelin_diff_0.geometry} material={materials.michelin_diff} />
          <mesh geometry={nodes.ARm4_vt_wheel003_ARm4_V_logo_0.geometry} material={materials.ARm4_V_logo} />
        </group>
        <group position={[-75.261, 37.323, -150.797]} rotation={[Math.PI / 2, 0.035, -Math.PI]} scale={[-105.483, 105.483, 105.483]}>
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_brake002_0.geometry} material={materials['amdb11_brake.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_misc_chrome002_0.geometry} material={materials['amdb11_misc_chrome.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_misc002_0.geometry} material={materials['amdb11_misc.002']} />
          <mesh geometry={nodes.amdb11_brakedisc_FR004_amdb11_caliper002_0.geometry} material={materials['amdb11_caliper.002']} />
        </group>
        <mesh geometry={nodes.ARm4_taillightglass_L_tinted_ARm4_glass_head_tinted_0.geometry} material={materials.ARm4_glass_head_tinted} position={[0, 0, -0.128]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_taillightglass_R_tinted_ARm4_glass_head_tinted_0.geometry} material={materials.ARm4_glass_head_tinted} position={[0, 0, -0.128]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_trunklight_L_tinted_ARm4_glass_head_tinted_0.geometry} material={materials.ARm4_glass_head_tinted} position={[0, 0, -0.128]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_trunklight_R_tinted_ARm4_glass_head_tinted_0.geometry} material={materials.ARm4_glass_head_tinted} position={[0, 0, -0.128]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_doorpanel_L_rgb_ARm4_rgb_0.geometry} material={materials.ARm4_rgb} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_doorpanel_R_rgb_ARm4_rgb_0.geometry} material={materials.ARm4_rgb} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_door_L_handle_carbon_ARm4_common_carbon_0.geometry} material={materials.ARm4_common_carbon} position={[0.134, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_door_R_handle_carbon_ARm4_common_carbon_0.geometry} material={materials.ARm4_common_carbon} position={[-0.163, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_interior_console_trim_forged_ARm4_forged_carbon_0.geometry} material={materials.ARm4_forged_carbon} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_interior_trim_forged_ARm4_forged_carbon_0.geometry} material={materials.ARm4_forged_carbon} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_interior_upper_trim_forged_ARm4_forged_carbon_0.geometry} material={materials.ARm4_forged_carbon} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_lip_carbon_ARm4_common_carbon_0.geometry} material={materials.ARm4_common_carbon} position={[0, 0.148, -0.321]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_interior_console_trim_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_interior_console_trim_carbon_ARm4_common_carbon_0.geometry} material={materials.ARm4_common_carbon} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_interior_upper_trim_black_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_interior_upper_trim_carbon_ARm4_common_carbon_0.geometry} material={materials.ARm4_common_carbon} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_interior_trim_carbon_ARm4_common_carbon_0.geometry} material={materials.ARm4_common_carbon} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_splitter_street_carbon_ARm4_common_carbon_0.geometry} material={materials.ARm4_common_carbon} position={[0, -0.199, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_skirt_race_ARm4_main_0.geometry} material={materials.ARm4_main} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_fender_trim_R_black_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_ariel_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_gts_pad_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_header_i6_etk_engine_i6_0.geometry} material={materials.etk_engine_i6} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.ARm4_header_i6_turbo_etk_engine_i6_0.geometry} material={materials.etk_engine_i6} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.ARm4_needle_fuel_etk_gauges_0.geometry} material={materials.etk_gauges} position={[49.184, 93.197, 41.626]} rotation={[-2.836, 0, 0]} scale={0.942} />
        <mesh geometry={nodes.ARm4_needle_speedo_etk_gauges_0.geometry} material={materials.etk_gauges} position={[41.867, 96.078, 42.275]} rotation={[-2.907, 0, 0]} scale={0.942} />
        <mesh geometry={nodes.ARm4_needle_tacho_etk_gauges_0.geometry} material={materials.etk_gauges} position={[29.175, 96.078, 42.275]} rotation={[-2.91, 0, 0]} scale={0.942} />
        <mesh geometry={nodes.ARm4_needle_temp_etk_gauges_0.geometry} material={materials.etk_gauges} position={[21.886, 93.197, 41.626]} rotation={[-2.836, 0, 0]} scale={0.942} />
        <mesh geometry={nodes.ARm4_engine_i6_etk_engine_i6_0.geometry} material={materials.etk_engine_i6} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.ARm4_upperarm_R_etkc_0.geometry} material={materials.etkc} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.ARm4_transfercase_etkc_0.geometry} material={materials.etkc} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.ARm4_tierod_F_etkc_0.geometry} material={materials.etkc} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.ARm4_swaybar_F_etkc_0.geometry} material={materials.etkc} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.ARm4_subframe_R_etkc_0.geometry} material={materials.etkc} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.ARm4_subframe_F_etkc_0.geometry} material={materials.etkc} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.ARm4_strut_F_etkc_0.geometry} material={materials.etkc} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.ARm4_steeringbox_etkc_0.geometry} material={materials.etkc} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.ARm4_spring_R_etkc_0.geometry} material={materials.etkc} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.ARm4_shock_R_etkc_0.geometry} material={materials.etkc} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.ARm4_lowerarm_R_etkc_0.geometry} material={materials.etkc} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.ARm4_lowerarm_F_b_etkc_0.geometry} material={materials.etkc} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.ARm4_lowerarm_F_a_etkc_0.geometry} material={materials.etkc} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.ARm4_hub_F_etkc_0.geometry} material={materials.etkc} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.ARm4_heatshield_etkc_0.geometry} material={materials.etkc} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.ARm4_halfshaft_R_etkc_0.geometry} material={materials.etkc} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.ARm4_halfshaft_F_etkc_0.geometry} material={materials.etkc} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.ARm4_driveshaft_etkc_0.geometry} material={materials.etkc} position={[0, 33.102, -42.17]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.ARm4_diff_F_etkc_0.geometry} material={materials.etkc} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.ARm4_diff_etkc_0.geometry} material={materials.etkc} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.ARm4_transmission_etkc_0.geometry} material={materials.etkc} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.ARm4_sunvisor_R_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_sunvisor_L_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_headlightglass_L_ARm4_Light_D_0.geometry} material={materials.ARm4_Light_D} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_headlightglass_R_ARm4_glass_0.geometry} material={materials.ARm4_glass} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_gaspedal_ARm4_INT_Decals_0.geometry} material={materials.ARm4_INT_Decals} position={[31.789, 30.306, 65.514]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_bumper_Support_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_underbody_etkc_0.geometry} material={materials.etkc} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.ARm4_doorglass_R_ARm4_glass_0.geometry} material={materials.ARm4_glass} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_doorglass_L_ARm4_glass_0.geometry} material={materials.ARm4_glass} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_windshield_ARm4_glass_0.geometry} material={materials.ARm4_glass} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_roof_ARm4_common_carbon_0.geometry} material={materials.ARm4_common_carbon} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_interior_rgb_ARm4_rgb_0.geometry} material={materials.ARm4_rgb} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_sideglass_R_tinted_ARm4_glass_tinted_0.geometry} material={materials.ARm4_glass_tinted} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_sideglass_L_tinted_ARm4_glass_tinted_0.geometry} material={materials.ARm4_glass_tinted} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_backlight_tinted_ARm4_glass_tinted_0.geometry} material={materials.ARm4_glass_tinted} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_mudflaps_R_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_mudflaps_F_R_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.ARm4_mudflaps_F_L_ARm4_common_black_0.geometry} material={materials.ARm4_common_black} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes['Object_4003_Scene_-_Root002_0'].geometry} material={materials['Scene_-_Root.002']} position={[75.519, 37.323, 130.31]} rotation={[-Math.PI / 2, 0, 0]} scale={90.462} />
        <mesh geometry={nodes['Object_4001_Scene_-_Root002_0'].geometry} material={materials['Scene_-_Root.002']} position={[75.519, 37.323, -150.797]} rotation={[-Math.PI / 2, 0, 0]} scale={90.462} />
        <mesh geometry={nodes['Object_4002_Scene_-_Root002_0'].geometry} material={materials['Scene_-_Root.002']} position={[-75.261, 37.323, 130.31]} rotation={[-Math.PI / 2, 0, 0]} scale={[-90.462, 90.462, 90.462]} />
        <mesh geometry={nodes['Object_4004_Scene_-_Root002_0'].geometry} material={materials['Scene_-_Root.002']} position={[-75.261, 37.323, -150.797]} rotation={[-Math.PI / 2, 0, 0]} scale={[-90.462, 90.462, 90.462]} />
      </group>
    </group>
  )
}

useGLTF.preload('./bmw/scene.gltf')
